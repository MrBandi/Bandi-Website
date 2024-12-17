interface Experience {
    id: number;
    title: string;
    duration: string;
    description: string;
}

export const personalBio = `
    嗨！我叫 Bandi，是一位正在學習前端設計的後端開發者，目前在勤益人工智慧工程系 大一。
    從國中開始接觸程式設計，並在高中在學期間參與專題競賽、申請專利，進入大學之後開始學習前端設計、影像深度學習等技術。

`;

export const experiences: Experience[] = [
    {
        id: 1,
        title: 'Minecraft 夢飛翔伺服器 創造者',
        duration: '2018 - 2019',
        description: '服主身分',
    },
    {
        id: 2,
        title: 'Discord Bot 開發者',
        duration: '2019 - 2023',
        description: '開發 Discord Bot，提供各種功能，群組管理、小遊戲、自動回覆等。',
    },
    {
        id: 3,
        title: 'FiveM 伺服器服主',
        duration: '2019 - 2023',
        description: '經營多個伺服器，期間開始接觸 Lua 語言，開發伺服器插件。',
    },
    {
        id: 4,
        title: 'FiveM 插件開發者',
        duration: '2021 - 現在',
        description: '開發 FiveM 插件，提供各種功能、娛樂遊戲等。',
    },
    {
        id: 5,
        title: 'SITCON CAMP 2024 資訊組',
        duration: '2024/08 - 2024/08',
        description: '負責更新及修復點數系統。',
    },
    {
        id: 6,
        title: '勤益社團 資訊研究社 副社長',
        duration: '2024 - 現在',
        description: '開發社團內部系統、處理社團大小事情。',
    },
    {
        id: 7,
        title: 'LunarHosts 經營者',
        duration: '2024/05 - 現在',
        description: '提供 Discord Bot 託管、網頁託管服務。',
    },
];

export const projectExperiences: Experience[] = [
    {
        id: 1,
        title: '空中書寫筆 - 專題/專利',
        duration: '2022/09 - 2024/01',
        description: '一款可以在空中揮動軌跡，就可以立刻協助年長者開啟手機較困難的操作。',
    },
    {
        id: 2,
        title: 'KOALA-BOT - Discord Bot',
        duration: '2023/01 - 2023/08',
        description: '有著多種功能的 Discord Bot，提供各種功能，群組管理、小遊戲、自動回覆等。',
    },
];