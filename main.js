document.addEventListener('DOMContentLoaded', function() {
    // ------------------- 状态管理 (无变化) -------------------
    let currentDiscipline = '全部';
    let currentCategory = '全部';
    let currentSortMode = 'default';
    let customOrder = [];
    let sortableInstance = null;

    // ------------------- DOM 元素获取 (无变化) -------------------
    const tableBody = document.getElementById('exams-body');
    const disciplineSelect = document.getElementById('discipline-select');
    const categoryFiltersContainer = document.getElementById('category-filters');
    const searchInput = document.getElementById('search-input');
    const sortDefaultBtn = document.getElementById('sort-default-btn');
    const sortAlphaBtn = document.getElementById('sort-alpha-btn');
    const sortCustomBtn = document.getElementById('sort-custom-btn');
    
    // ------------------- 核心功能函数 -------------------

    /**
     * 渲染表格
     * @param {Array} dataToRender - 需要被渲染的数据数组
     */
    function renderTable(dataToRender) {
        tableBody.innerHTML = '';
        dataToRender.forEach(exam => {
            const row = tableBody.insertRow();
            row.dataset.id = exam.id;
            
            row.insertCell().textContent = exam.name;
            row.insertCell().textContent = exam.category;
            
            const linkCell = row.insertCell();
            const link = document.createElement('a');
            link.href = exam.url;
            link.textContent = '点击前往';
            link.target = '_blank';
            linkCell.appendChild(link);
            
            // ▼▼▼ 核心修改在这里 ▼▼▼
            // 直接使用 innerHTML 渲染来自 data.js 的备注内容
            // 因为内容已经由 TinyMCE 编辑为 HTML，所以不再需要 linkify 函数
            const notesCell = row.insertCell();
            notesCell.innerHTML = exam.notes || ''; // 使用 || '' 避免 notes 为空时出错
            // ▲▲▲ 核心修改在这里 ▲▲▲
        });
    }

    // ... 其他所有函数 (createCategoryButtons, applyFiltersAndSort, 等等) 保持不变 ...
    function createCategoryButtons() {
        const categories = ['全部', ...new Set(examData.map(exam => exam.category))];
        categoryFiltersContainer.innerHTML = '';
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.textContent = category;
            if (category === '全部') button.classList.add('active');
            categoryFiltersContainer.appendChild(button);
        });
    }

    function applyFiltersAndSort() {
        const searchTerm = searchInput.value.toLowerCase();
        let processedData = [...examData];

        if (currentDiscipline !== '全部') {
            processedData = processedData.filter(exam => exam.discipline === currentDiscipline);
        }
        if (currentCategory !== '全部') {
            processedData = processedData.filter(exam => exam.category === currentCategory);
        }
        if (searchTerm) {
            processedData = processedData.filter(exam => 
                exam.name.toLowerCase().includes(searchTerm) || 
                (exam.notes && exam.notes.toLowerCase().includes(searchTerm))
            );
        }

        if (currentSortMode === 'alpha') {
            processedData.sort((a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN'));
        } else if (currentSortMode === 'custom' && customOrder.length > 0) {
            const orderMap = new Map(customOrder.map((id, index) => [String(id), index]));
            processedData.sort((a, b) => (orderMap.get(String(a.id)) ?? Infinity) - (orderMap.get(String(b.id)) ?? Infinity));
        }
        
        renderTable(processedData);
        updateSortButtonsUI();
    }

    function saveCustomOrderToStorage() {
        const currentOrder = Array.from(tableBody.children).map(row => row.dataset.id);
        localStorage.setItem('examCustomOrder', JSON.stringify(currentOrder));
        customOrder = currentOrder;
    }

    function loadCustomOrderFromStorage() {
        const savedOrder = localStorage.getItem('examCustomOrder');
        if (savedOrder) {
            try {
                customOrder = JSON.parse(savedOrder);
                currentSortMode = 'custom';
            } catch (e) {
                console.error("无法从localStorage解析自定义顺序:", e);
                localStorage.removeItem('examCustomOrder');
            }
        }
    }
    
    function updateSortButtonsUI() {
        document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
        if (currentSortMode === 'default') sortDefaultBtn.classList.add('active');
        else if (currentSortMode === 'alpha') sortAlphaBtn.classList.add('active');
        else if (currentSortMode === 'custom') sortCustomBtn.classList.add('active');
        
        if (sortableInstance) {
            sortableInstance.option('disabled', currentSortMode !== 'custom');
        }
    }

    function initializeSortable() {
        sortableInstance = new Sortable(tableBody, {
            animation: 150,
            disabled: currentSortMode !== 'custom',
            ghostClass: 'sortable-ghost',
            dragClass: 'sortable-drag',
            onEnd: saveCustomOrderToStorage
        });
    }

    sortDefaultBtn.addEventListener('click', () => { currentSortMode = 'default'; applyFiltersAndSort(); });
    sortAlphaBtn.addEventListener('click', () => { currentSortMode = 'alpha'; applyFiltersAndSort(); });
    sortCustomBtn.addEventListener('click', () => { currentSortMode = 'custom'; applyFiltersAndSort(); });
    
    disciplineSelect.addEventListener('change', (e) => {
        currentDiscipline = e.target.value;
        currentCategory = '全部';
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn').classList.add('active');
        applyFiltersAndSort();
    });
    
    searchInput.addEventListener('input', applyFiltersAndSort);
    
    categoryFiltersContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            currentCategory = e.target.textContent;
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            applyFiltersAndSort();
        }
    });

    // --- 反馈弹窗逻辑 (无变化) ---
    const feedbackModal = document.getElementById('feedback-modal');
    const feedbackBtn = document.getElementById('feedback-btn');
    const closeBtn = document.querySelector('.close-btn');

    if (feedbackBtn) {
        feedbackBtn.onclick = function() { feedbackModal.style.display = 'block'; }
    }
    if (closeBtn) {
        closeBtn.onclick = function() { feedbackModal.style.display = 'none'; }
    }
    window.onclick = function(event) {
        if (event.target == feedbackModal) { feedbackModal.style.display = 'none'; }
    }

    // ------------------- 初始化 (无变化) -------------------
    examData.forEach((exam, index) => exam.id = String(index));
    loadCustomOrderFromStorage();
    createCategoryButtons();
    applyFiltersAndSort();
    initializeSortable();
});