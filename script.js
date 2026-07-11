const researchTypes = [
  {
    name: "临床医学研究",
    icon: "🩺",
    desc: "RCT、前瞻性/回顾性队列、病例对照与二次研究智能体矩阵。",
    tags: ["RCT", "前瞻队列", "回顾性队列", "病例对照", "二次研究"],
    subs: [
      "系统评价 / Meta 分析",
      "真实世界研究（RWE）",
      "多中心临床试验",
      "诊断试验 / 预后模型",
      "循证指南更新"
    ]
  },
  {
    name: "生物信息学",
    icon: "🧬",
    desc: "组学数据处理、单细胞、空间转录组与通路分析智能体。",
    tags: ["转录组", "单细胞", "空间组学", "蛋白组", "通路富集"],
    subs: [
      "差异表达与功能注释",
      "单细胞聚类 / 细胞类型鉴定",
      "伪时序与细胞通信分析",
      "空间表达模式与亚区划分",
      "整合多组学 Meta-omics"
    ]
  },
  {
    name: "基础医学研究",
    icon: "🧪",
    desc: "实验设计、动物模型、分子实验和统计验证全链路支持。",
    tags: ["实验设计", "模型选择", "分子实验", "统计验证"],
    subs: [
      "体内/体外模型设计",
      "CRISPR/基因编辑",
      "蛋白互作 / 结构预测",
      "成像分析与量化",
      "实验数据质控与重复性"
    ]
  },
  {
    name: "医工交叉与人工智能",
    icon: "🤖",
    desc: "医学影像、可穿戴设备、AI 模型训练与部署支持。",
    tags: ["影像组学", "深度学习", "可穿戴", "设备数据", "部署"],
    subs: [
      "影像分割 / 检测 / 分类",
      "影像组学特征工程",
      "多模态对齐与融合",
      "实时监测与告警策略",
      "模型合规与可解释性"
    ]
  }
];

const secondaryFlow = [
  {
    id: "topic",
    title: "选题智能体",
    icon: "🧭",
    description: "生成 10 个选题建议，支持选择进入下一步。",
    placeholder: "描述人群、疾病、干预和对照，例如：2 型糖尿病患者的 GLP-1 受体激动剂与 SGLT2 抑制剂对比。",
    action: "生成选题",
    handler: () => {
      const ideas = [
        "GLP-1RA vs SGLT2i 对 2 型糖尿病合并 CKD 的肾功能结局",
        "AI 辅助心电图在早期房颤筛查的诊断准确性 Meta 分析",
        "血清 IL-6 水平与 COVID-19 重症风险的系统评价",
        "儿童肥胖管理中家庭干预的有效性 Meta 分析",
        "免疫检查点抑制剂在晚期黑色素瘤中的真实世界生存率",
        "阿尔茨海默病患者血浆 Aβ42/40 与 PET 成像一致性研究",
        "质子泵抑制剂长期使用与骨折风险 Meta 分析",
        "高血压患者数字疗法辅助降压的随机对照试验综合分析",
        "乳腺癌新辅助治疗后 pCR 与长期生存的关联",
        "影像组学特征用于肺结节良恶性判别的诊断试验准确性"
      ];
      return ideas;
    }
  },
  {
    id: "ingestion",
    title: "数据获取智能体",
    icon: "📥",
    description: "上传整理数据或输入检索策略，连接公共数据库。",
    placeholder: "输入检索式/数据库来源，或描述已上传数据概况。",
    action: "获取数据",
    handler: (input) => {
      return `已根据检索式「${input || "用户未提供检索式"}」生成数据获取方案，包含：PubMed + Embase + Cochrane Library；导出 CSV 并记录 PRISMA 流程。`;
    }
  },
  {
    id: "cleaning",
    title: "数据清洗智能体",
    icon: "🧼",
    description: "格式统一、缺失值处理、偏倚检查并输出质控报告。",
    placeholder: "描述数据字段、缺失比例或格式问题。",
    action: "清洗数据",
    handler: (input) => {
      return `完成清洗：\n- 统一效应量与方向\n- 检查缺失（<5%）并使用多重插补\n- 生成偏倚风险表（ROB2）\n- 发现 ${input || "主要字段"} 的异常值已标记`;
    }
  },
  {
    id: "analysis",
    title: "数据分析智能体",
    icon: "📊",
    description: "针对系统评价与 Meta 分析提供统计方案与结果摘要。",
    placeholder: "指定效应量、模型类型或亚组/敏感性分析需求。",
    action: "运行分析",
    handler: (input) => {
      return `已完成随机效应模型 Meta 分析：\n- 效应量：RR\n- I² = 28%，无显著异质性\n- 亚组：${input || "按干预剂型、随访时间"}\n- 敏感性：逐一剔除试验结果稳健`;
    }
  },
  {
    id: "charting",
    title: "图表制作智能体",
    icon: "📈",
    description: "生成森林图、漏斗图及亚组可视化草稿，可自定义。",
    placeholder: "描述需要生成的图表和配色偏好。",
    action: "生成图表",
    handler: (input) => {
      return `已生成：\n- 森林图（随机效应）\n- 漏斗图（Egger p=0.12，发表偏倚可接受）\n- 亚组森林图：${input || "按干预剂型"}\n可在图表制作页调整配色与标注。`;
    }
  },
  {
    id: "writing",
    title: "论文写作智能体",
    icon: "📝",
    description: "给出 IMRaD 结构、关键段落要点与摘要建议。",
    placeholder: "提供主要发现与研究亮点，生成撰写框架。",
    action: "生成写作框架",
    handler: (input) => {
      return `写作框架：\n- 引言：阐述未满足的临床需求，铺垫 ${input || "主要发现"}\n- 方法：PRISMA 声明、检索式、纳排标准、质控\n- 结果：效应量、异质性、亚组与敏感性\n- 讨论：机制解释、局限性、临床意义\n- 结论：强调临床价值与未来研究方向`;
    }
  },
  {
    id: "journal",
    title: "选刊智能体",
    icon: "📚",
    description: "根据主题与分区推荐期刊，显示影响因子与投稿要求。",
    placeholder: "输入主题、期望分区/IF，或开放获取偏好。",
    action: "推荐期刊",
    handler: (input) => {
      return `期刊推荐：\n1) BMJ Open（IF 5+，开放获取）\n2) Journal of Clinical Epidemiology（IF 7+，偏好方法学稿件）\n3) PLOS Medicine（IF 10+，公共卫生与临床广泛覆盖）\n基于偏好：${input || "通用临床二次研究"}`;
    }
  },
  {
    id: "submission",
    title: "投稿智能体",
    icon: "📤",
    description: "提供投稿材料清单、Cover Letter 模板与流程指引。",
    placeholder: "输入目标期刊或特殊投稿要求。",
    action: "生成投稿指引",
    handler: (input) => {
      return `投稿指引：\n- 材料：稿件、图表、补充材料、数据可用性声明、冲突声明\n- Cover Letter：突出创新点与临床意义\n- 系统：${input || "期刊官网"} 在线提交，建议预审查查重`;
    }
  },
  {
    id: "revision",
    title: "返修智能体",
    icon: "🛠️",
    description: "根据审稿意见逐条生成修改建议并跟踪进度。",
    placeholder: "粘贴审稿意见，自动拆解为任务并设置优先级。",
    action: "生成返修建议",
    handler: (input) => {
      return `返修清单：\n- 统计方法补充：已添加敏感性分析描述\n- 图表：补充亚组森林图高分辨率版本\n- 文本：在讨论中加入局限性说明\n待完成：${input || "逐条核对审稿人意见"}`;
    }
  }
];

let selectedTopic = "";

const workflowHistory = [
  {
    title: "糖尿病 GLP-1RA vs SGLT2i Meta 分析",
    status: "投稿中",
    steps: ["选题完成", "数据获取完成", "清洗完成", "分析完成", "图表完成", "写作完成", "选刊完成", "投稿进行"]
  },
  {
    title: "影像组学肺结节诊断准确性综述",
    status: "返修中",
    steps: ["选题完成", "数据获取完成", "清洗完成", "分析完成", "图表完成", "写作完成", "选刊完成", "投稿完成", "返修进行"]
  }
];

const todoItems = [
  "补充敏感性分析附录文件",
  "上传森林图矢量版本",
  "检查期刊格式要求与模板",
  "在 Cover Letter 中突出临床价值"
];

function renderClassification() {
  const container = document.getElementById("classification-list");
  if (!container) return;

  container.innerHTML = researchTypes
    .map(
      (type) => `
        <article class="class-card">
          <h3><span class="icon-circle">${type.icon}</span>${type.name}</h3>
          <p class="muted">${type.desc}</p>
          <div>${type.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <ul class="sub-list">
            ${type.subs.map((s) => `<li>${s}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderSecondaryFlow() {
  const container = document.getElementById("secondary-flow");
  const log = document.getElementById("flow-log");
  const progress = document.getElementById("flow-progress");
  if (!container || !log || !progress) return;

  const entries = [];
  container.innerHTML = secondaryFlow
    .map(
      (step, index) => `
        <article class="module-card" data-step="${step.id}" data-index="${index}">
          <h3><span class="icon-circle">${step.icon}</span>${step.title}</h3>
          <p class="muted">${step.description}</p>
          <textarea placeholder="${step.placeholder}" data-input="${step.id}"></textarea>
          <div class="actions">
            <button class="btn primary" data-action="${step.id}">${step.action}</button>
            <span class="status-pill" id="${step.id}-status">等待中</span>
          </div>
          <div class="result" id="${step.id}-result">暂无结果</div>
        </article>
      `
    )
    .join("");

  container.querySelectorAll("button[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.action;
      const step = secondaryFlow.find((s) => s.id === id);
      const textarea = container.querySelector(`textarea[data-input="${id}"]`);
      const status = document.getElementById(`${id}-status`);
      const result = document.getElementById(`${id}-result`);
      const input = textarea.value.trim();

      status.textContent = "运行中...";
      status.style.background = "rgba(59,130,246,0.15)";
      result.textContent = "处理中...";

      setTimeout(() => {
        const output = step.handler(input);
        if (id === "topic" && Array.isArray(output)) {
          result.innerHTML = `
            <ol class="selectable-list">
              ${output.map((o, i) => `<li data-idea="${o}">${i + 1}. ${o}</li>`).join("")}
            </ol>
          `;
          result.querySelectorAll("li").forEach((li) => {
            li.addEventListener("click", () => {
              selectedTopic = li.dataset.idea;
              result.querySelectorAll("li").forEach((node) => node.classList.remove("selected"));
              li.classList.add("selected");
              entries.push(`选题已确定：${selectedTopic}`);
              log.innerHTML = entries.map((entry) => `<li>${entry}</li>`).join("");
            });
          });
        } else {
          const enrichedOutput =
            id === "ingestion" && selectedTopic
              ? `${output}\n关联选题：${selectedTopic}`
              : output;
          result.textContent = Array.isArray(enrichedOutput)
            ? enrichedOutput.map((o, i) => `${i + 1}. ${o}`).join("\n")
            : enrichedOutput;
        }
        status.textContent = "已完成";
        status.style.background = "rgba(16,185,129,0.18)";

        entries.push(`${step.title}完成`);
        log.innerHTML = entries.map((entry) => `<li>${entry}</li>`).join("");

        const idx = secondaryFlow.findIndex((s) => s.id === id);
        progress.querySelectorAll(".step").forEach((node, i) => {
          node.classList.toggle("active", i <= idx);
        });
      }, 400);
    });
  });
}

function setupAgentPanel() {
  const agentInput = document.getElementById("agent-input");
  const agentRun = document.getElementById("agent-run");
  const agentClear = document.getElementById("agent-clear");
  const agentOutput = document.getElementById("agent-output");
  const agentStatus = document.getElementById("agent-status");
  const agentProgress = document.getElementById("agent-progress");
  const agentSelect = document.getElementById("agent-select");
  if (!agentInput || !agentRun || !agentOutput) return;

  const agentTemplates = {
    topic: "请提供目标人群、疾病与对照，例如：'老年高血压患者中 ACEI vs ARB 对卒中风险的影响'",
    ingestion: "请输入检索式或上传数据的字段说明，例如 'PubMed: (diabetes) AND (GLP-1RA) AND RCT'",
    cleaning: "说明缺失值、异常值与格式问题，例如 '缺失 BMI 5%，不同效应量方向不一致'",
    analysis: "指定分析模型与效应量，例如 '随机效应模型，RR，亚组按剂型/随访时间'",
    charting: "描述需要的图表，如 '森林图 + 漏斗图，主题色蓝绿'",
    writing: "提供核心发现与局限，例如 'GLP-1RA 在 HbA1c 改善上优于对照，异质性低'",
    journal: "输入主题、影响因子期望与 OA 偏好，例如 '代谢性疾病，IF>5，接受 OA'",
    submission: "目标期刊 + 特殊格式要求，例如 'JCE，图表需 TIFF 300dpi'",
    revision: "粘贴审稿意见或主要问题列表"
  };

  agentSelect.addEventListener("change", () => {
    agentInput.placeholder = agentTemplates[agentSelect.value];
  });
  agentInput.placeholder = agentTemplates[agentSelect.value];

  agentRun.addEventListener("click", () => {
    agentStatus.textContent = "运行中...";
    agentStatus.className = "status running";
    agentProgress.style.width = "35%";
    agentOutput.textContent = "处理中...";

    setTimeout(() => {
      agentProgress.style.width = "70%";
      const prompts = {
        topic: "生成 10 个选题建议并按新颖度排序",
        ingestion: "给出检索式优化与数据库导出格式建议",
        cleaning: "返回缺失值与异常值处理方案",
        analysis: "提供 Meta 分析模型、统计指标与敏感性分析步骤",
        charting: "生成森林图/漏斗图所需数据结构与美术建议",
        writing: "生成 IMRaD 段落要点与摘要草稿",
        journal: "基于主题推荐期刊并显示分区/IF",
        submission: "列出投稿材料清单与 Cover Letter 要点",
        revision: "拆解审稿意见并生成逐条修改建议"
      };

      const input = agentInput.value.trim() || "未提供具体输入";
      agentOutput.textContent = `智能体（${agentSelect.options[agentSelect.selectedIndex].text}）处理结果：\n- 请求：${prompts[agentSelect.value]}\n- 用户输入：${input}\n- 输出：建议方案已生成，可同步到全流程界面。`;
      agentProgress.style.width = "100%";
      agentStatus.textContent = "已完成";
      agentStatus.className = "status done";
    }, 450);
  });

  agentClear.addEventListener("click", () => {
    agentInput.value = "";
    agentOutput.textContent = "尚未生成结果";
    agentStatus.textContent = "等待中";
    agentStatus.className = "status idle";
    agentProgress.style.width = "0%";
  });
}

function renderProfile() {
  const currentList = document.getElementById("current-workflows");
  const historyList = document.getElementById("history-log");
  const todoList = document.getElementById("todo-list");
  if (!currentList || !historyList || !todoList) return;

  currentList.innerHTML = workflowHistory
    .map(
      (flow) => `
        <li>
          <strong>${flow.title}</strong>
          <div class="tag">状态：${flow.status}</div>
          <div class="muted">进度：${flow.steps.join(" · ")}</div>
        </li>
      `
    )
    .join("");

  historyList.innerHTML = `
    <li><strong>血脂异常治疗 RCT 系统评价</strong><div class="muted">已投稿 · 等待审稿</div></li>
    <li><strong>人工智能辅助诊断胃癌综述</strong><div class="muted">已接受 · 进入排期</div></li>
    <li><strong>慢阻肺远程监测真实世界研究</strong><div class="muted">返修完成 · 准备重投</div></li>
  `;

  todoList.innerHTML = todoItems.map((item) => `<li>${item}</li>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderClassification();
  renderSecondaryFlow();
  setupAgentPanel();
  renderProfile();
});
