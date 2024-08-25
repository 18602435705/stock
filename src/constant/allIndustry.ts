/**
 * 当前社会，zf管理十大基础行业
 * 1. 钢铁：包钢股份，中信特钢
 * 2. 有色金属：中国铝业，江西铜业，紫金矿业，华友钴业，北方稀土，厦门钨业
 * 3. 石油：中石油，中海油，中石化
 * 4. 化学原料及化学制品：万华化学
 * 5. 建筑材料：东方雨虹，北新建材
 * 6. 汽车行业：上汽集团
 * 7. 电子行业：海康威视，环旭电子
 * 8. 电力行业：华能国际，长江电力，中国核电，中国广核，
 * 9. 纺织行业：华孚时尚，嘉欣丝绸
 * 10. 机械行业：徐工机械，三一重工
 *
 * 当前市场，市值排前行业：
 * 1. 银行
 * 2. 酿酒
 * 3. 电力
 * 4. 石油
 * 5. 证券
 * 6. 半导体
 * 7. 保险
 * 8. 煤炭
 * 9. 消费电子
 * 10. 家电
 * 11. 化学制药
 * 12. 电池
 * 13. 汽车整车
 * 14. 食品饮料
 * 15. 电子元件
 * 16. 工程建设
 * 17. 软件开发
 * 18. 汽车零部件
 * 19. 医疗医药
 * 20. 物流
 * 21. 电网设备
 * 22. 通信设备
 * 23. 化学制品
 * 24. 互联网服务
 * 25. 光伏设备
 * 26. 专用设备
 * 27. 航运港口
 * 28. 中药
 * 29. 房地产开发
 * 30. 有色金属
 * 31. 文化传媒
 * 32. 光学光电子
 * 33. 航空航天
 * 34. 生物制品
 * 35. 农牧饲渔
 * 36. 钢铁行业
 * 37. 贵金属
 * 38. 化学原料
 * 39. 通用设备
 * 40. 计算机设备
 * 41. 通信服务
 * 42. 航空铁路公路
 * 43. 船舶制造
 * 44. 纺织服装
 * 45. 环保行业
 * 46. 采掘行业
 * 47. 游戏
 * 48. 教育
 * 49. 玻璃玻纤
 * 50. 旅游酒店
 */

// 银行
const bank = [
  {
    code: '601398',
    name: '工商银行',
    base: '1',
  },
  {
    code: '600036',
    name: '招商银行',
    base: '1',
  },
  {
    code: '601229',
    name: '上海银行',
    base: '1',
  },
];
// 酿酒
const wineMaking = [
  {
    code: '000858',
    name: '五粮液',
    base: '0',
  },
  {
    code: '000799',
    name: '酒鬼酒',
    base: '0',
  },
  {
    code: '600600',
    name: '青岛啤酒',
    base: '1',
  },
];
// 电力
const electricity = [
  {
    code: '600900',
    name: '长江电力',
    base: '1',
  },
  {
    code: '003816',
    name: '中国广核',
    base: '0',
  },
  {
    code: '600023',
    name: '浙能电力',
    base: '1',
  },
];
// 石油
const oil = [
  {
    code: '600028',
    name: '中国石化',
    base: '1',
  },
  {
    code: '601857',
    name: '中国石油',
    base: '1',
  },
  {
    code: '600938',
    name: '中国海油',
    base: '1',
  },
];
// 证券券商
const securities = [
  {
    code: '600030',
    name: '中信证券',
    base: '1',
  },
  {
    code: '600999',
    name: '招商证券',
    base: '1',
  },
  {
    code: '300059',
    name: '东方财富',
    base: '0',
  },
];
// 半导体
const semiconductor = [
  {
    code: '688981',
    name: '中芯国际',
    base: '1',
  },
  {
    code: '002049',
    name: '紫光国微',
    base: '0',
  },
  {
    code: '002371',
    name: '北方华创',
    base: '0',
  },
];
// 保险
const insurance = [
  {
    code: '601318',
    name: '中国平安',
    base: '1',
  },
  {
    code: '601601',
    name: '中国太保',
    base: '1',
  },
  {
    code: '601319',
    name: '中国人保',
    base: '1',
  },
];
// 煤炭
const coal = [
  {
    code: '601088',
    name: '中国神华',
    base: '1',
  },
  {
    code: '601225',
    name: '陕西煤业',
    base: '1',
  },
  {
    code: '002128',
    name: '电投能源',
    base: '0',
  },
];
// 消费电子
const consumerElectronics = [
  {
    code: '601138',
    name: '工业富联',
    base: '1',
  },
  {
    code: '002475',
    name: '立讯精密',
    base: '0',
  },
  {
    code: '002241',
    name: '歌尔股份',
    base: '0',
  },
];
// 家电
const homeAppliances = [
  {
    code: '000333',
    name: '美的集团',
    base: '0',
  },
  {
    code: '000651',
    name: '格力电器',
    base: '0',
  },
  {
    code: '000921',
    name: '海信家电',
    base: '0',
  },
];
// 化学制药
const chemicalPharmaceuticals = [
  {
    code: '000333',
    name: '恒瑞医药',
    base: '0',
  },
  {
    code: '600216',
    name: '浙江医药',
    base: '1',
  },
  {
    code: '300573',
    name: '兴齐眼药',
    base: '0',
  },
];
// 电池
const battery = [
  {
    code: '300750',
    name: '宁德时代',
    base: '0',
  },
  {
    code: '300014',
    name: '亿纬锂能',
    base: '0',
  },
  {
    code: '300073',
    name: '当升科技',
    base: '0',
  },
];
// 汽车
const car = [
  {
    code: '002594',
    name: '比亚迪',
    base: '0',
  },
  {
    code: '601127',
    name: '塞力斯',
    base: '1',
  },
  {
    code: '600066',
    name: '宇通客车',
    base: '1',
  },
];
// 食品饮料
const foodBeverage = [
  {
    code: '603288',
    name: '海天味业',
    base: '1',
  },
  {
    code: '600887',
    name: '伊利股份',
    base: '1',
  },
  {
    code: '300999',
    name: '金龙鱼',
    base: '0',
  },
];
// 电子元件
const electronicComponents = [
  {
    code: '300124',
    name: '汇川技术',
    base: '0',
  },
  {
    code: '002384',
    name: '东山精密',
    base: '0',
  },
  {
    code: '000062',
    name: '深圳华强',
    base: '0',
  },
];
// 软件开发
const softwareDevelopment = [
  {
    code: '688111',
    name: '金山办公',
    base: '1',
  },
  {
    code: '601360',
    name: '三六零',
    base: '1',
  },
  {
    code: '300033',
    name: '同花顺',
    base: '0',
  },
];
// 汽车零部件
const autoParts = [
  {
    code: '000338',
    name: '潍柴动力',
    base: '0',
  },
  {
    code: '002085',
    name: '万丰奥威',
    base: '0',
  },
  {
    code: '601689',
    name: '拓普集团',
    base: '1',
  },
];
// 医疗医药
const medicalMedicine = [
  {
    code: '300760',
    name: '迈瑞医疗',
    base: '0',
  },
  {
    code: '000661',
    name: '长春高新',
    base: '0',
  },
  {
    code: '002223',
    name: '鱼跃医疗',
    base: '0',
  },
];
// 物流
const logistics = [
  {
    code: '601816',
    name: '京沪高铁',
    base: '1',
  },
  {
    code: '002352',
    name: '顺丰控股',
    base: '0',
  },
  {
    code: '603056',
    name: '德邦股份',
    base: '1',
  },
];
// 通信与设备
const communicationEquipment = [
  {
    code: '000063',
    name: '中兴通讯',
    base: '0',
  },
  {
    code: '600941',
    name: '中国移动',
    base: '1',
  },
  {
    code: '300308',
    name: '中际旭创',
    base: '0',
  },
];
// 中药
const traditionalChineseMedicine = [
  {
    code: '000538',
    name: '云南白药',
    base: '0',
  },
  {
    code: '000999',
    name: '华润三九',
    base: '0',
  },
  {
    code: '002737',
    name: '葵花药业',
    base: '0',
  },
];
// 工程机械
const constructionMachinery = [
  {
    code: '600031',
    name: '三一重工',
    base: '1',
  },
  {
    code: '000425',
    name: '徐工机械',
    base: '0',
  },
  {
    code: '600761',
    name: '安徽合力',
    base: '1',
  },
];
// 船舶制造
const shipbuilding = [
  {
    code: '600150',
    name: '中国船舶',
    base: '1',
  },
  {
    code: '601989',
    name: '中国重工',
    base: '1',
  },
  {
    code: '600482',
    name: '中国动力',
    base: '1',
  },
];
// 航空铁路公路
const aviationRailwayHighway = [
  {
    code: '600377',
    name: '宁沪高速',
    base: '1',
  },
  {
    code: '001965',
    name: '招商公路',
    base: '0',
  },
  {
    code: '600106',
    name: '重庆路桥',
    base: '1',
  },
];
// 计算机设备
const computereEquipment = [
  {
    code: '002415',
    name: '海康威视',
    base: '0',
  },
  {
    code: '603019',
    name: '中科曙光',
    base: '1',
  },
  {
    code: '000977',
    name: '浪潮信息',
    base: '0',
  },
];

// 所有核心行业
const allStock = [
  ...computereEquipment,
  ...aviationRailwayHighway,
  ...bank,
  ...wineMaking,
  ...electricity,
  ...oil,
  ...securities,
  ...semiconductor,
  ...insurance,
  ...coal,
  ...consumerElectronics,
  ...homeAppliances,
  ...chemicalPharmaceuticals,
  ...battery,
  ...car,
  ...foodBeverage,
  ...electronicComponents,
  ...shipbuilding,
  ...constructionMachinery,
  ...traditionalChineseMedicine,
  ...communicationEquipment,
  ...logistics,
  ...medicalMedicine,
  ...autoParts,
  ...softwareDevelopment,
];

export {
  allStock,
  oil,
  securities,
  semiconductor,
  insurance,
  bank,
  coal,
  consumerElectronics,
  homeAppliances,
  chemicalPharmaceuticals,
  battery,
  car,
  foodBeverage,
  electronicComponents,
  softwareDevelopment,
  logistics,
  medicalMedicine,
  autoParts,
  communicationEquipment,
  wineMaking,
  electricity,
  shipbuilding,
  constructionMachinery,
  traditionalChineseMedicine,
  aviationRailwayHighway,
  computereEquipment,
};
