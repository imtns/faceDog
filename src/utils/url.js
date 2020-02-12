
// 获取token
export const LOGIN = '/api/auth/access_token';
// 提交用户信息
export const NEW_PROFILE = '/api/v1.5/user/profile';
export const PROFILE = '/api/user/profile';
// 根据用户邀请码直接认证
export const VERIFY = '/api/user/certify/code';
// 资料删除照片
export const HANDLE_PICTURE = '/api/user/image';
// 发现页面-获取动态列表接口
export const DISCOVER_MOMENT_LIST = '/api/discover/moments/nearby';
// 发布页面-发布动态
export const FABU_FABU_MOMENT = '/api/discover/moments';
// 发布页面 - 上传图片
export const FABU_UPLOAD_PIC = '/api​/discover​/moment​/images';
// 颜值PK
export const BATTLE = '/api/face/battle';
// 喜欢某个用户
export const MAKEFRIEND = '/api/face/enjoy';
// 喜欢某个人照片3次
export const BATTLE_COMMIT = '/api/face/battle_commit';
// 喜欢我的列表
export const LIKE_ME = '/api/face/enjoy_list';
// 获取用户好友列表
export const FRIENDS_LIST = '/api/user/contacts';
// 好友通过
export const AGREE_FRIEND = '/api/face/join_contact';
// 排行榜页面
export const RANK_LIST = '/api/face/list';
// 用户设置
export const USER_SETTING = '/api/user/settings';
// 获取用户喜欢次数
export const USER_LIKE_TIME = '/api/user/unread';
// 删除动态
export const DELETE_MOMENT = '/api/discover/moments';
// 获取系统消息
export const USER_MSG_UNREAD = '/api/user/unread';
// 个人接口
export const USER_RANK = '/api/user/ranking';
// 推广记录
export const INVATATION = '/api/user/invitation';
// 红包提现
export const WITHDRAW = '/api/user/take_money';
// 获取小程序二维码
export const QRCODE = '/api/auth/qrcode';
// 获取活动
export const GET_ACTIVITY = '/api/activity/list';
// 每日日报
export const DAILY_REPORT = '/api/face/daily_news';
// 获取二维码
export const SUBMIT_FORMID = '/api/user/tmp_submit';
// 提交formid
export const USER_REGISTER = '/api/user/register';
// 提交formid
export const USER_VERIFY = '/api/user/justify';
// 认证
export const MY_FAVORITE = '/api/v1.5/face/favorites' // 收藏夹
// 删除收藏夹
export const DELETE_FAVORITE = '/api/v1.5/face/favorites/delete'
// 删除喜欢我的
export const DELETE_ENJOY = '/api/face/delete_enjoy'
// 获取动态的详情
export const GET_MOMENT_DETAIL = '/api/v1.5/discover'
// 注册页获取数字
export const GET_REGISTER_NUMBER = '/api/v1.5/show_user_count';
// 获取推荐
export const GET_RECOMMENT_LIST = '/api/v1.5/recommend';

//  ------------   2.1
// 跳过battle当前组
export const BATTLE_PASS = '/api/face/double_pass';
// 颜币
export const GET_COIN = '/api/user/coin';
// 发送微信请求
export const ASK_WECHAT = '/api/user/ask_wechat';
// 发送微信请求列表
export const SEND_WECHAT_LIST = '/api/user/send_wechat_list';
// 收到的微信请求列表
export const GET_WECHAT_LIST = '/api/user/get_wechat_list';
// 同意微信请求
export const SEND_WECHAT = '/api/user/send_wechat';   
// 测试页面
export const TEST_PRIVILEGE = '/api/v1.5/user/edit_privilege';  
// 测试页面
export const TEST_CHARGE = '/api/v1.5/user/recharge';  
// 发送消息定时推送
export const SEND_UNREAD_MESSAGE = '/api/v1.5/user/send_unread_message';
// 获取未读红包和广场消息 
export const GET_UNREAD_MSG = '/api/v1.5/unread_message';
// 修改广场未读消息状态
export const UPDATE_SQUAREMSG_STATUS  = '/api/v1.5/modify_moment_status';
// 修改红包未读消息状态
export const UPDATE_REDPACKET_STATUS = '/api/v1.5/modify_ask_wechat_status';
 