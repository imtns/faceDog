
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
