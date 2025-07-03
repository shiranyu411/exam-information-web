const examData = [
  {
    "name": "教师资格",
    "category": "准入类",
    "url": "https://ntce.neea.edu.cn/",
    "notes": "/",
    "discipline": "教育学"
  },
  {
    "name": "注册消防工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "全国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "法律职业资格",
    "category": "准入类",
    "url": "https://www.moj.gov.cn/jgsz/jgszzsdw/zsdwgjsfkszx/",
    "notes": "/",
    "discipline": "法学"
  },
  {
    "name": "中国委托公证人资格（香港、澳门）",
    "category": "准入类",
    "url": "https://www.hkeaa.edu.hk/tc/IPE/CAAOQE/index.html",
    "notes": "/",
    "discipline": "法学"
  },
  {
    "name": "注册会计师（CPA）",
    "category": "准入类",
    "url": "https://www.cicpa.org.cn/",
    "notes": "/",
    "discipline": "经济学"
  },
  {
    "name": "民用核安全设备无损检验人员资格",
    "category": "准入类",
    "url": "/",
    "notes": " 准入门框过高",
    "discipline": "工学"
  },
  {
    "name": "民用核设施操纵人员资格",
    "category": "准入类",
    "url": "/",
    "notes": " 准入门框过高",
    "discipline": "工学"
  },
  {
    "name": "注册核安全工程师",
    "category": "准入类",
    "url": "/",
    "notes": " 准入门框过高",
    "discipline": "工学"
  },
  {
    "name": "注册建筑师",
    "category": "准入类",
    "url": "https://rst.hubei.gov.cn/hbrsksw/zyjslks/zyjsry/",
    "notes": "以湖北为例",
    "discipline": "工学"
  },
  {
    "name": "监理工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "房地产估价师",
    "category": "准入类",
    "url": "https://www.cirea.org.cn/category/48",
    "notes": "/",
    "discipline": "管理学"
  },
  {
    "name": "造价工程师",
    "category": "准入类",
    "url": "https://rst.hubei.gov.cn/hbrsksw/zyjslks/zyjsry/",
    "notes": "以湖北为例",
    "discipline": "工学"
  },
  {
    "name": "注册城乡规划师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "建造师",
    "category": "准入类",
    "url": "https://rst.hubei.gov.cn/hbrsksw/zyjslks/zyjsry/",
    "notes": "以湖北为例",
    "discipline": "工学"
  },
  {
    "name": "勘察设计注册工程师注册结构工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "注册土木工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "注册化工工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "注册电气工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "注册公用设备工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "注册环保工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "注册石油天然气工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "注册冶金工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "注册采矿/矿物工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "注册机械工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "注册验船师",
    "category": "准入类",
    "url": "https://www.msa.gov.cn/page/article.do?articleId=62B2696C-0E99-48BC-852C-02D1EEBC2314",
    "notes": "2025年度（详见海事局官网）",
    "discipline": "工学"
  },
  {
    "name": "船员资格（含船员、渔业船员）",
    "category": "准入类",
    "url": "/",
    "notes": "暂无（详见暑期海事局官网）",
    "discipline": "工学"
  },
  {
    "name": "兽医资格执业兽医",
    "category": "准入类",
    "url": "https://zysy-ksgl.cadc.net.cn/EXAMVET/public/index.jsp",
    "notes": "/",
    "discipline": "农学"
  },
  {
    "name": "乡村兽医",
    "category": "准入类",
    "url": "https://zysy-ksgl.cadc.net.cn/EXAMVET/public/index.jsp",
    "notes": "/",
    "discipline": "农学"
  },
  {
    "name": "拍卖师",
    "category": "准入类",
    "url": "/",
    "notes": "见各地拍卖师协会官网",
    "discipline": "经济学"
  },
  {
    "name": "演出经纪人员资格",
    "category": "准入类",
    "url": "https://wlsc.mr.mct.gov.cn/user/login",
    "notes": "全国演出经纪人员管理与服务系统",
    "discipline": "艺术学"
  },
  {
    "name": "医生资格医师",
    "category": "准入类",
    "url": "https://www.nmec.org.cn/",
    "notes": "国家医学考试网",
    "discipline": "医学"
  },
  {
    "name": "乡村医生",
    "category": "准入类",
    "url": "https://www.nmec.org.cn/",
    "notes": "国家医学考试网",
    "discipline": "医学"
  },
  {
    "name": "人体器官移植医师",
    "category": "准入类",
    "url": "https://www.nmec.org.cn/",
    "notes": "国家医学考试网",
    "discipline": "医学"
  },
  {
    "name": "护士执业资格",
    "category": "准入类",
    "url": "https://www.21wecan.com/wsrcw/c100199/hushizhiyezhige.shtml",
    "notes": "国家卫健委人才交流服务中心",
    "discipline": "医学"
  },
  {
    "name": "母婴保健技术服务人员资格",
    "category": "准入类",
    "url": "/",
    "notes": "准入门槛过高，见各地卫生厅",
    "discipline": "医学"
  },
  {
    "name": "出入境检疫处理人员资格",
    "category": "准入类",
    "url": "/",
    "notes": "暂无，见各地海关",
    "discipline": "农学"
  },
  {
    "name": "注册设备监理师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "注册计量师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "广播电视播音员、主持人资格",
    "category": "准入类",
    "url": "https://zgks.nrta.gov.cn/EXAMGD/index.html",
    "notes": "全国广播电视播音员主持人资格考试网",
    "discipline": "艺术学"
  },
  {
    "name": "新闻记者职业资格",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "文学"
  },
  {
    "name": "注册安全工程师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "执业药师",
    "category": "准入类",
    "url": "https://rst.hubei.gov.cn/hbrsksw/zyjslks/zyjsry/",
    "notes": "以湖北为例",
    "discipline": "医学"
  },
  {
    "name": "专利代理人",
    "category": "准入类",
    "url": "https://ggfw-dlsks.cnipa.gov.cn/",
    "notes": "国家知识产权局专利代理师考试系统",
    "discipline": "管理学"
  },
  {
    "name": "导游资格",
    "category": "准入类",
    "url": "http://sghr26.ata-test.net/site",
    "notes": "全国旅游监管服务平台",
    "discipline": "管理学"
  },
  {
    "name": "注册测绘师",
    "category": "准入类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "特种设备检验、检测人员资格认定",
    "category": "准入类",
    "url": "https://exam.casei.org.cn/casei/website/examLoginAction!toExamLogin.action",
    "notes": "检验检测人员管理系统",
    "discipline": "工学"
  },
  {
    "name": "工程咨询（投资）专业技术人员职业资格",
    "category": "水平评价类",
    "url": "https://rst.hubei.gov.cn/hbrsksw/zyjslks/zyjsry/",
    "notes": "以湖北为例",
    "discipline": "工学"
  },
  {
    "name": "通信专业技术人员职业资格",
    "category": "水平评价类",
    "url": "https://www.txks.org.cn/",
    "notes": "全国通信专业技术人员职业水平考试网",
    "discipline": "工学"
  },
  {
    "name": "计算机技术与软件专业技术资格",
    "category": "水平评价类",
    "url": "https://www.ruankao.org.cn/",
    "notes": "中国计算机技术职业资格网",
    "discipline": "工学"
  },
  {
    "name": "社会工作者职业资格",
    "category": "水平评价类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "管理学"
  },
  {
    "name": "会计专业技术资格",
    "category": "水平评价类",
    "url": "http://kzp.mof.gov.cn/ausm/1.html",
    "notes": "全国会计专业技术资格考试报名平台",
    "discipline": "经济学"
  },
  {
    "name": "资产评估师",
    "category": "水平评价类",
    "url": "https://www.cas.org.cn/ksgl/index.htm",
    "notes": "中国资产评估协会",
    "discipline": "管理学"
  },
  {
    "name": "经济专业技术资格",
    "category": "水平评价类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "经济学"
  },
  {
    "name": "土地登记代理专业人员职业资格",
    "category": "水平评价类",
    "url": "https://c.exam-sp.com/creva-agents",
    "notes": "不动产登记代理人职业资格考试报名网",
    "discipline": "管理学"
  },
  {
    "name": "环境影响评价工程师",
    "category": "水平评价类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "工学"
  },
  {
    "name": "房地产经纪专业人员职业资格",
    "category": "水平评价类",
    "url": "https://cirea.ata-test.net.cn/Index/",
    "notes": "全国房地产经济专业人员职业资格考试服务平台",
    "discipline": "管理学"
  },
  {
    "name": "机动车检测维修专业技术人员职业资格",
    "category": "水平评价类",
    "url": "www.jtzyzg.org.cn",
    "notes": "交通职业资格网",
    "discipline": "工学"
  },
  {
    "name": "公路水运工程试验检测专业技术人员职业资格",
    "category": "水平评价类",
    "url": "www.jtzyzg.org.cn",
    "notes": "交通职业资格网",
    "discipline": "工学"
  },
  {
    "name": "水利工程质量检测员资格",
    "category": "水平评价类",
    "url": "/",
    "notes": "暂无，见水利部官网",
    "discipline": "工学"
  },
  {
    "name": "卫生专业技术资格",
    "category": "水平评价类",
    "url": "https://www.21wecan.com/wsrcw/c100190/chuzhongji.shtml",
    "notes": "卫健委人才交流服务中心",
    "discipline": "医学"
  },
  {
    "name": "审计专业技术资格",
    "discipline": "经济学",
    "category": "水平评价类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "<p>中国人事考试网（考纲见<a href=\"https://www.audit.gov.cn/n8/n29/index.html\" target=\"_blank\" rel=\"noopener\">审计署</a>官网）</p>"
  },
  {
    "name": "税务师",
    "category": "水平评价类",
    "url": "https://ksbm.ecctaa.cn/mould2.html#/e/shuiwushi/login",
    "notes": "中国注册税务师协会",
    "discipline": "经济学"
  },
  {
    "name": "认证人员职业资格",
    "category": "水平评价类",
    "url": "http://www.ccaa.org.cn/kstz.html",
    "notes": "中国认证认可协会",
    "discipline": "管理学"
  },
  {
    "name": "出版专业技术人员职业资格",
    "category": "水平评价类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "文学"
  },
  {
    "name": "统计专业技术资格",
    "category": "水平评价类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "理学"
  },
  {
    "name": "银行业专业人员职业资格",
    "category": "水平评价类",
    "url": "http://cj.ccbp.org.cn/group/",
    "notes": "银行业专业人员资格考试服务平台",
    "discipline": "经济学"
  },
  {
    "name": "证券期货业从业人员资格",
    "category": "水平评价类",
    "url": "https://www.cfachina.org/servicesupport/examination/qualificationexamination/",
    "notes": "中国期货业协会",
    "discipline": "经济学"
  },
  {
    "name": "文物保护工程从业资格",
    "category": "水平评价类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "历史学"
  },
  {
    "name": "翻译专业资格",
    "category": "水平评价类",
    "url": "https://zg.cpta.com.cn/",
    "notes": "中国人事考试网",
    "discipline": "文学"
  },
  {
    "name": "业余无线电",
    "category": "其他",
    "url": "https://www.cqid.cn/",
    "notes": "业余无线电模拟考试平台",
    "discipline": "工学"
  },
  {
    "name": "特许金融分析师（CFA)",
    "category": "其他",
    "url": "https://www.cfa.cn/",
    "notes": "中国CFA考试网",
    "discipline": "经济学"
  },
  {
    "name": "特许公认会计师公会（ACCA)",
    "category": "其他",
    "url": "https://www.accaglobal.com.cn/",
    "notes": "ACCA中国",
    "discipline": "经济学"
  }
];