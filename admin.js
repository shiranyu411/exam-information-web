document.addEventListener('DOMContentLoaded', function() {
    // ========== 全局变量和状态 ==========
    let currentData = JSON.parse(JSON.stringify(examData));
    let currentConfig = JSON.parse(JSON.stringify(siteConfig));

    // ========== DOM元素获取 ==========
    const tableBody = document.getElementById('admin-table-body');
    const editModal = document.getElementById('edit-modal');
    const formTitle = document.getElementById('form-title');
    const editIndexInput = document.getElementById('edit-index');
    const editNameInput = document.getElementById('edit-name');
    const editDisciplineSelect = document.getElementById('edit-discipline');
    const editCategorySelect = document.getElementById('edit-category');
    const editUrlInput = document.getElementById('edit-url');
    const saveBtn = document.getElementById('save-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const closeBtn = document.getElementById('edit-close-btn');
    const addNewBtn = document.getElementById('add-new-btn');
    const disciplinesList = document.getElementById('disciplines-list');
    const newDisciplineInput = document.getElementById('new-discipline-input');
    const addDisciplineBtn = document.getElementById('add-discipline-btn');
    const categoriesList = document.getElementById('categories-list');
    const newCategoryInput = document.getElementById('new-category-input');
    const addCategoryBtn = document.getElementById('add-category-btn');
    const exportConfigBtn = document.getElementById('export-config-btn');
    const exportConfigCode = document.getElementById('export-config-code');
    const exportDataBtn = document.getElementById('export-data-btn');
    const exportDataCode = document.getElementById('export-data-code');

    // ========== 配置管理 ==========
    function renderConfigLists() {
        disciplinesList.innerHTML = '';
        currentConfig.disciplines.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = '×';
            deleteBtn.className = 'delete-item-btn';
            deleteBtn.onclick = () => {
                currentConfig.disciplines.splice(index, 1);
                renderConfigLists();
            };
            li.appendChild(deleteBtn);
            disciplinesList.appendChild(li);
        });

        categoriesList.innerHTML = '';
        currentConfig.categories.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = '×';
            deleteBtn.className = 'delete-item-btn';
            deleteBtn.onclick = () => {
                currentConfig.categories.splice(index, 1);
                renderConfigLists();
            };
            li.appendChild(deleteBtn);
            categoriesList.appendChild(li);
        });
    }

    addDisciplineBtn.addEventListener('click', () => {
        const value = newDisciplineInput.value.trim();
        if (value && !currentConfig.disciplines.includes(value)) {
            currentConfig.disciplines.push(value);
            newDisciplineInput.value = '';
            renderConfigLists();
        }
    });

    addCategoryBtn.addEventListener('click', () => {
        const value = newCategoryInput.value.trim();
        if (value && !currentConfig.categories.includes(value)) {
            currentConfig.categories.push(value);
            newCategoryInput.value = '';
            renderConfigLists();
        }
    });

    // ========== 数据管理 ==========
    function renderTable() {
        tableBody.innerHTML = '';
        currentData.forEach((item, index) => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = item.name;
            row.insertCell().textContent = item.discipline;
            row.insertCell().textContent = item.category;
            const actionsCell = row.insertCell();
            const editBtn = document.createElement('button');
            editBtn.textContent = '编辑';
            editBtn.onclick = () => showForm(index);
            actionsCell.appendChild(editBtn);
        });
    }

    function populateSelect(selectElement, optionsArray) {
        selectElement.innerHTML = '';
        optionsArray.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt;
            selectElement.appendChild(option);
        });
    }

    function showForm(index = -1) {
        populateSelect(editDisciplineSelect, currentConfig.disciplines);
        populateSelect(editCategorySelect, currentConfig.categories);
        if (index === -1) {
            formTitle.textContent = '新增考试信息';
            editIndexInput.value = -1;
            editNameInput.value = '';
            editDisciplineSelect.value = currentConfig.disciplines[0];
            editCategorySelect.value = currentConfig.categories[0];
            editUrlInput.value = '';
            tinymce.get('edit-notes').setContent('');
        } else {
            formTitle.textContent = '编辑考试信息';
            const item = currentData[index];
            editIndexInput.value = index;
            editNameInput.value = item.name;
            editDisciplineSelect.value = item.discipline;
            editCategorySelect.value = item.category;
            editUrlInput.value = item.url;
            tinymce.get('edit-notes').setContent(item.notes || '');
        }
        editModal.style.display = 'block';
    }

    function hideForm() {
        editModal.style.display = 'none';
    }

    function saveItem() {
        const index = parseInt(editIndexInput.value, 10);
        const item = {
            name: editNameInput.value.trim(),
            discipline: editDisciplineSelect.value,
            category: editCategorySelect.value,
            url: editUrlInput.value.trim(),
            notes: tinymce.get('edit-notes').getContent(),
        };
        if (index === -1) {
            currentData.push(item);
        } else {
            currentData[index] = item;
        }
        renderTable();
        hideForm();
    }

    // ========== 导出功能 ==========
    exportConfigBtn.addEventListener('click', () => {
        const configString = `const siteConfig = ${JSON.stringify(currentConfig, null, 2)};`;
        exportConfigCode.value = configString;
        exportConfigCode.style.display = 'block';
        exportConfigCode.select();
        alert('config.js 的代码已生成，请复制并更新文件。');
    });

    exportDataBtn.addEventListener('click', () => {
        const dataString = `const examData = ${JSON.stringify(currentData, null, 2)};`;
        exportDataCode.value = dataString;
        exportDataCode.style.display = 'block';
        exportDataCode.select();
        alert('data.js 的代码已生成，请复制并更新文件。');
    });

    // ========== 初始化 ==========
    tinymce.init({
        selector: '#edit-notes',
        plugins: 'link lists media image',
        toolbar: 'undo redo | bold italic | bullist numlist | link image media',
        menubar: false,
        height: 250,
        setup: function(editor) {
            editor.on('init', function() {
                // 确保编辑器就绪后再绑定事件和渲染
                addNewBtn.addEventListener('click', () => showForm(-1));
                cancelBtn.addEventListener('click', hideForm);
                closeBtn.addEventListener('click', hideForm);
                saveBtn.addEventListener('click', saveItem);
                window.onclick = function(event) {
                    if (event.target == editModal) {
                        hideForm();
                    }
                }
                // 初始渲染
                renderConfigLists();
                renderTable();
            });
        }
    });
});