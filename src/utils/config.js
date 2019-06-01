const CONFIG = {
    app: {
        sdkappid: '1400214230', // 填入创建腾讯云通讯应用获取到的 sdkappid
        accountType: '36862' // 填入在帐号体系集成配置中获取到的 accountType
    },
    users: [ // 将下面内容替换成通过控制台开发辅助工具生成的几组 identifier 和 userSig
        {
            identifier: 'imtns',
            userSig: 'eJxlj9FOgzAUhu95iobbGT3tILolXsgYCQSNBBbRm4ZBwcromrY4h-HdVXSRxHP7ff-5z3m3EEJ2FqfnRVnue2GoOUpmoyWywT77g1LyihaGzlX1D7I3yRWjRW2YGiF2XZcATB1eMWF4zX8N3hmhJ1hXLR07fvIOAMEOmU83aN6M8Ha9WYWJr3TfRLjdyVZAfPH0MEsT8LLDVXC-nQUNPG-hxVnnvuulSdj4m*yGdxHpdHQXD7IeRBNequCwC7u8HJKVVx-bxz4va*VcTyoN79jpoQUmQBZkQl*Z0nwvRoEAdvHXvd9jWx-WJ0QlXaw_'

        },
        {
            identifier: 'webim20191',
            userSig: 'eJxlj0FPg0AYRO-8CrJXje4uUIq3io0SSwOUmrQXsrAL-YrAShdpa-zvKjaRxLm*l5nMh6brOooXqxuWZU1Xq0SdpED6nY4wuv6DUgJPmEqMlv*D4iihFQnLlWgHSCzLohiPHeCiVpDDxehFChXFxCEj58DLZBj6LTExJrZjUjpWoBigP9*4XuhGwSPzXx9UUQTyVtbrTcaunFguF2X*g4mXcijp7RnxX0QeruZt345PVfbXTlThDv7lZzYITXP2zjtcmPee4UP4DZRtSz3o0kFlbi8Mm17ii1jOqLvoj1AUw-C9x*LUAP-BGmf2hc6sl92'
        }
    ],
    avChatRoomId: '20190201' // 群ID, 必选,这里为了快速演示，固定了群ID，可以由您指定。
};

module.exports = CONFIG;
