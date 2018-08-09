
var host = 'http://127.0.0.1:81'

// var host = 'https://mp.dogrun.com.cn';

var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,
    // 登录地址，用于建立会话
    loginUrl: 'system/manager/login',

    // 退出，
    logout: 'system/manager/logout',

    // 获取用户信息
    getUersInfo: 'system/manager/getUersInfo',

    // 修改密码
    resetPassword: 'system/manager/resetPassword',

    // 获取员工列表
    getManagerListByType: 'system/manager/getManagerListByType',

    // 获取角色列表
    getRolesByStatus: 'system/role/getRolesByStatus',

    // 添加角色
    addRole: 'system/role/addRole',

    // 禁用 启用 角色
    disableOrEnableRole: 'system/role/disableOrEnableRole',

    // 添加员工
    addManager: 'system/manager/addManager',

    // 获取所有会员
    getAllMembers: 'system/user/getAllUsers',

    // 添加会员
    addMember: 'system/user/toRegister',

    // 获取会员详情
    getMemberInfo: 'system/user/getUserById',

    // 获取会员人数
    getMemberCount: 'system/user/getMemberCount',

    // 根据手机号模糊查询用户列表
    getUsersLikePhone: 'system/user/getUsersLikePhone',

    // 获取我的账户userId
    getMyAccount: 'system/account/getMyAccount',

    // 充值
    toRecharge: 'system/account/toRecharge',

    // 会员个人充值记录
    getRechargeList: 'system/account/getRechargeList',

    // 会员充值记录
    getRechargeListByMonth: 'system/account/getRechargeListByMonth',

    // 获取我的订单userId
    getMyOrders: 'system/order/getMyOrders',

    // 获取订单分页列表
    getOrderList: 'system/order/getOrderList',

    // 按月份获取订单分页列表
    getOrderListByMonth: 'system/order/getOrderListByMonth',

    // 添加订单
    addOrder: 'system/order/addOrder',

    // 支付挂单
    toPayEntryOrders: 'system/order/toPayEntryOrders',

    // 删除挂单
    toDeleteEntryOrders: 'system/order/toDeleteEntryOrders',

    // 根据日期查询订单
    getStatisticsOrdersByDay: 'system/statistics/getStatisticsOrdersByDay',

    // 统计年里每个月订单收入
    getStatisticsByMonthInYear: 'system/statistics/getStatisticsByMonthInYear',

    // 统计近30天每天订单收入
    getStatisticsByNearOneMonth: 'system/statistics/getStatisticsByNearOneMonth',

    // 统计年收入
    getStatisticsByYear: 'system/statistics/getStatisticsByYear',

    // 统计给定日期订单收入
    getStatisticsByDay: 'system/statistics/getStatisticsByDay',

    // 统计给定日期不同类型订单收入
    getStatisticsByDayWithType: 'system/statistics/getStatisticsByDayWithType',

    // 添加库存类型
    addStoreParts: 'system/store/addStoreParts',

    // 获取库存类型列表
    getStoreParts: 'system/store/getStoreParts',

    // 获取库存商品列表
    getGoodsList: 'system/store/getGoodsList',

    // 获取库存商品列表按类型
    getGoodsListByPartsId: 'system/store/getGoodsListByPartsId',

    // 添加库存商品
    addStoreGoods: 'system/store/addStoreGoods',

    // 添加维修工单记录
    addRepairRecord: 'system/repair/addRepairRecord',

    // 获取收支列表 0 全部 1收入  2支出
    getInOutByType: '/system/inout/getInOutByType',

    // 添加收支  1收入  2支出
    addInOut: '/system/inout/addInOut',

    // 删除收支
    deleteInOutById: '/system/inout/deleteInOut',

    // 根据类型获取配置记录
    getConfigsByType: '/system/congfig/getConfigsByType',

    // 添加配置
    addConfig: '/system/congfig/addConfig',

    // 根据id删除
    deleteConfigById: '/system/congfig/deleteConfigById'
  }
}

export default config
