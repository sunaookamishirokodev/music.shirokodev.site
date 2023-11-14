export type Musics = {
  name: string;
  author: string;
  lang?: "zh" | "en" | "vn" | "ja";
  url: string;
  createAt?: string;
};
const musics: Musics[] = [
  {
    name: "Losing Interest (Remix)",
    author: "Burgettii & Shiloh Dynasty",
    lang: "en",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1171073591685689346/Losing_Interest_Remix_feat._Burgettii__Shiloh_Dynasty.mp3?ex=655b5a45&is=6548e545&hm=d46f7bf5885d909a0a41cca4125b75578bcb23e56cfe18ba01ff58c8b23ef416&",
    createAt: "Fri Nov 10 2023 23:17:13 GMT+0700 (Indochina Time)",
  },
  {
    name: "My Girl",
    author: "Shiloh Dynasty",
    lang: "en",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1172565023906857010/4_My_Girl_feat._Shiloh_Dynasty.mp3?ex=6560c746&is=654e5246&hm=7285dc3dc3dfa4e939346d4d84b42c3d09f7f95b5b24d883c4948854850368d8&",
    createAt: "Fri Nov 10 2023 23:17:13 GMT+0700 (Indochina Time)",
  },
  {
    name: "i hate u, i love u",
    author: "gnash & olivia o'brien",
    lang: "en",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1172569466119393440/y2mate.com_-_gnash_i_hate_u_i_love_u_ft_olivia_obrien_music_video.mp3?ex=6560cb6a&is=654e566a&hm=067194709740ff95e6b7267baeb348f7c3cb9493bb700063f2d0592e8e741630&",
    createAt: "Fri Nov 10 2023 23:17:13 GMT+0700 (Indochina Time)",
  },
  {
    name: "So Far Away (Acoustic)",
    author: "Martin Garrix & David Guetta (Cover by Adam Christopher)",
    lang: "en",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1172569187718266990/y2mate.com_-_So_Far_Away_Acoustic_Martin_Garrix_David_Guetta_Cover_by_Adam_Christopher.mp3?ex=6560cb27&is=654e5627&hm=926a885cb7bc52656dcd8bf5f01213289bf720e70b13d2cb7be1d9981332f6d8&",
    createAt: "Fri Nov 10 2023 23:17:13 GMT+0700 (Indochina Time)",
  },
  {
    name: "Dynasty (Official Music Video)",
    author: "MIIA",
    lang: "en",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1173025048156712970/y2mate.com_-_Dynasty_Official_Music_Video_MIIA.mp3?ex=656273b5&is=654ffeb5&hm=8478390c64c2a76d30e5953c1ab9e0a4b394ec02e14d09db007b66a99e84ba5f&",
    createAt: "Sun Nov 12 2023 05:25:34 GMT+0700 (Indochina Time)",
  },
  {
    name: "OneRepublic",
    author: "Counting Stars",
    lang: "en",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1173024903834906756/y2mate.com_-_OneRepublic_Counting_Stars.mp3?ex=65627392&is=654ffe92&hm=22c47bbd386060416fcff6a1a34b7fe5647aad5210d8a780899d53c558747ecb&",
    createAt: "Sun Nov 12 2023 05:25:34 GMT+0700 (Indochina Time)",
  },
  {
    name: "ブルーアーカイブ Blue Archive OST 9. Midsummer Cat",
    author: "Blue Archive",
    lang: "ja",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1173032259729752135/y2mate.com_-_Blue_Archive_OST_9_Midsummer_Cat.mp3?ex=65627a6c&is=6550056c&hm=0b90bf68be48e2e5bf791aa904f8068ce8dd8e361e7d2bf8c1768f5dd18b4435&",
    createAt: "Sun Nov 12 2023 05:53:35 GMT+0700 (Indochina Time)",
  },
  {
    name: "ブルーアーカイブ Blue Archive OST 3. Mischievous Step",
    author: "Blue Archive",
    lang: "ja",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1173032368936857660/y2mate.com_-_Blue_Archive_Theme_03_Mischievous_Step_Maze_Stage_BGM.mp3?ex=65627a86&is=65500586&hm=9dc990beafd85ad2b7a81e304e0c0b01441aad15790b48fdc7e9ea84130e2991&",
    createAt: "Sun Nov 12 2023 05:53:35 GMT+0700 (Indochina Time)",
  },
  {
    name: "Hikikomari Kyuuketsuki no Monmon ending full Nemurenai (眠れない)",
    author: "MIMiNARI feat. Tomori Kusunoki",
    lang: "ja",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1173238573915459667/y2mate.com_-_Hikikomari_Kyuuketsuki_no_Monmon_ending_full_Nemurenai_by_MIMiNARI_feat_Tomori_Kusunoki.mp3?ex=65633a91&is=6550c591&hm=aa6fc130b5808d59830b4823e3b94b45b477d240faedcba554a2d5e16328bfde&",
    createAt: "Sun Nov 12 2023 19:33:51 GMT+0700 (Indochina Time)",
  },
  {
    name: "Head In The Clouds (Official Video)",
    author: "Hayd",
    lang: "en",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1173025148421550100/y2mate.com_-_Hayd_Head_In_The_Clouds_Official_Video.mp3?ex=656273cd&is=654ffecd&hm=46d8d4ac85d13474f4fa31733a7c7b31501d0a19d02d72f5fcc350dce17620b9&",
    createAt: "Sun Nov 12 2023 05:25:34 GMT+0700 (Indochina Time)",
  },
];

const a = [
  "LỆ LƯU LY - VŨ PHỤNG TIÊN x DT TẬP RAP x DRUM7 | OFFICIAL MUSIC VIDEO",
  "W/n - 3107 3 ( Official Video ) ft. 267, Nâu, Duongg.",
  "Chờ Đợi Có Đáng Sợ (Orinn Lofi Ver.) - Andiez | VIDEO LYRICS",
  "W/n - id 072019 | 3107 ft 267",
  "Như Anh Đã Thấy Em (CTTDE2) - PhucXp ft. Freak D"
]

export default musics;
