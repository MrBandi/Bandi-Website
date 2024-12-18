interface Experience {
  id: number;
  title: string;
  duration: string;
  description: string;
}

interface Project {
    id: number;
    name: string;
    link: string;
}

export const personalBio = `
    嗨！我叫 Bandi，是一位正在學習前端設計的後端開發者，目前在勤益人工智慧工程系 大一。
    從國中開始接觸程式設計，並在高中在學期間參與專題競賽、申請專利，進入大學之後開始學習前端設計、影像深度學習等技術。

`;

export const projects: Project[] = [
    {
        id: 1,
        name: '空中書寫筆',
        link: 'https://drive.google.com/drive/folders/1x0jAxvKCt22L869ToerJ-Kk732cJkTUP'
    },
    {
        id: 2,
        name: 'KOALA-BOT',
        link: 'https://github.com/MrBandi/KOALA_BOTv1'
    },
    {
        id: 3,
        name: '手語智慧核心系統',
        link: 'https://github.com/MrBandi/TW-SignLang-LSTM'
    },
    {
        id: 4,
        name: '玩家資料查詢系統',
        link: 'https://github.com/MrBandi/personal_information'
    },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Minecraft 夢飛翔伺服器 創造者",
    duration: "2018 - 2019",
    description: "服主身分",
  },
  {
    id: 2,
    title: "Discord Bot 開發者",
    duration: "2019 - 2023",
    description:
      "開發 Discord Bot，提供各種功能，群組管理、小遊戲、自動回覆等。",
  },
  {
    id: 3,
    title: "FiveM 伺服器服主",
    duration: "2019 - 2023",
    description: "經營多個伺服器，期間開始接觸 Lua 語言，開發伺服器插件。",
  },
  {
    id: 4,
    title: "FiveM 插件開發者",
    duration: "2021 - 現在",
    description: "開發 FiveM 插件，提供各種功能、娛樂遊戲等。",
  },
  {
    id: 5,
    title: "FiveM 胖海熊伺服器 技術人員",
    duration: "2023/12 - 2024/02",
    description: "修改及更新插件。",
  },
  {
    id: 6,
    title: "SITCON CAMP 2024 資訊組",
    duration: "2024/08 - 2024/08",
    description: "負責更新及修復點數系統。",
  },
  {
    id: 7,
    title: "勤益社團 資訊研究社 副社長",
    duration: "2024 - 現在",
    description: "開發社團內部系統、處理社團大小事情。",
  },
  {
    id: 8,
    title: "LunarHosts 經營者",
    duration: "2024/05 - 現在",
    description: "提供 Discord Bot 託管、網頁託管服務。",
  },
];

export const projectExperiences: Experience[] = [
  {
    id: 1,
    title: "空中書寫筆 - 專題/專利",
    duration: "2022/09 - 2024/01",
    description:
      "一款可以在空中揮動軌跡，就可以立刻協助年長者開啟手機較困難的操作。",
  },
  {
    id: 2,
    title: "KOALA-BOT - Discord Bot",
    duration: "2023/01 - 2023/08",
    description:
      "有著多種功能的 Discord Bot，提供各種功能，群組管理、小遊戲、自動回覆等。",
  },
  {
    id: 3,
    title: "玩家資料查詢系統 - 前端開發",
    duration: "2024/08 - 2024/09",
    description: "透過與後端連接 MySQL，去查詢玩家相關資料。(遊戲伺服器訂製)",
  },
  {
    id: 4,
    title: "NCUT 勤學有E - APP 開發",
    duration: "2024/12 - 現在",
    description: "開發中...",
  },
];

export const contestExperiences: Experience[] = [
  {
    id: 1,
    title: "112 學年度全國高級中學專題競賽 - 創意組",
    duration: "2023/02 - 2023/03",
    description: "作品名稱：空中書寫筆，獲得高中創意組 佳作。",
  },
  {
    id: 2,
    title: "第 53 屆技能競賽 北區分賽 - 資訊網路佈建",
    duration: "2023/03",
    description: "未得名。",
  },
  {
    id: 3,
    title: "第 63 屆桃園市中小學科學展覽會 - 電腦與資訊學科",
    duration: "2023/04 - 05",
    description: "作品名稱：無限空中書寫筆，獲得高中組 佳作。",
  },
  {
    id: 4,
    title: "2023 電腦鼠智慧輪型機器人國內及國際競賽 - 古典線迷宮",
    duration: "2023/08",
    description: "作品名稱：Bandi CAR 未得名。",
  },
  {
    id: 5,
    title: "2023 AIoT 智慧物聯網創新作品提案競賽",
    duration: "2023/03",
    description: "作品名稱：空中書寫筆，獲得 佳作。",
  },
  {
    id: 6,
    title: "2023 台灣創新技術博覽會 - 學校發明區",
    duration: "2023/10",
    description: "作品名稱：空中書寫筆、人流偵測系統、手語翻譯機器，未得名。",
  },
  {
    id: 7,
    title: "2023 第28屆大專校院資訊應用服務競賽 - 高中高職組",
    duration: "2023/10 - 2023/11",
    description: "作品名稱：手語智慧核心系統，獲得 第一名。",
  },
  {
    id: 8,
    title: "2024 GenAI Stars 生成式 AI 百工百業應用選拔 - 創意創客組",
    duration: "2024/06 - 2024/10",
    description: "作品名稱：AI手語網路神經核心系統，複賽入圍但未得名。",
  },
  {
    id: 9,
    title: "2024 亞洲教育創新與機器人競賽 勤益場 - 程控避障組",
    duration: "2024/10 - 2023/11",
    description: "作品名稱：倒立向前看，獲得 佳作。",
  },
];

export const activityExperiences: Experience[] = [
    {
        id: 1,
        title: "2023 台灣資安大會",
        duration: "2023/05",
        description: "身分：會眾",
    },
    {
        id: 2,
        title: "2023 AIS3 Junior",
        duration: "2023/08",
        description: "身分：D3 組員",
    },
    {
        id: 3,
        title: "2024 SITCON 年會",
        duration: "2024/03",
        description: "身分：會眾",
    },
    {
        id: 4,
        title: "2024 桃園之光 頒獎典禮",
        duration: "2024/05",
        description: "身分：被頒獎者",
    },
    {
        id: 5,
        title: "2024 台灣資安大會",
        duration: "2024/05",
        description: "身分：會眾",
    },
    {
        id: 6,
        title: "2024 SITCON CAMP",
        duration: "2023/07",
        description: "身分：資訊組 工作人員",
    },
    {
        id: 7,
        title: "2024 COSCUP 年會",
        duration: "2023/08",
        description: "身分：會眾",
    },
];