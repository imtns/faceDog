const CONFIG = {
	sdkappid: '1400214230', // 填入创建腾讯云通讯应用获取到的 sdkappid
	accountType: '36862', // 填入在帐号体系集成配置中获取到的 accountType
	users: [ // 将下面内容替换成通过控制台开发辅助工具生成的几组 identifier 和 userSig
		{
			identifier: 'imtns',
			userSig: 'eJxlj9FOgzAUhu95iobbGT3tILolXsgYCQSNBBbRm4ZBwcromrY4h-HdVXSRxHP7ff-5z3m3EEJ2FqfnRVnue2GoOUpmoyWywT77g1LyihaGzlX1D7I3yRWjRW2YGiF2XZcATB1eMWF4zX8N3hmhJ1hXLR07fvIOAMEOmU83aN6M8Ha9WYWJr3TfRLjdyVZAfPH0MEsT8LLDVXC-nQUNPG-hxVnnvuulSdj4m*yGdxHpdHQXD7IeRBNequCwC7u8HJKVVx-bxz4va*VcTyoN79jpoQUmQBZkQl*Z0nwvRoEAdvHXvd9jWx-WJ0QlXaw_'

		},
		{
			identifier: 'robot1',
			userSig: 'eJxlj1FPgzAUhd-5FU1fMdoyqrDEB4Mzw7HEuZHMvTQdLdixASktYxj-uxM1I-G*fl-OOffDAgDAVbS8ZklSmkJTfaoEBGMAEby6wKqSnDJNR4r-g6KtpBKUpVqoHmJCiIPQ0JFcFFqm8tdQ5bbUeMBrntO*5CfARcjBrjMaRtQy6*F8EgfhIvDMe6ROt48eCmeTqWm3BiedzcTyOZg9rNxWN3ei40-uS5qF2Wvq5XP05q7XkR91qX1E4S5ONnYujvvN3hzKKWrYTcR2bXw-qNTyIP4*8n2PnDcNaCNULcuiFxyECT7v-T5ofVpfm6Fd4w__'
		},
		{
			identifier: 'robot2',
			userSig: 'eJxlj1FPgzAUhd-5FYTXGdcW6oaJD5Nt2jgwhOH0qemgQLcBtZSFxfjf3VAjiff1*3LOuR*GaZrWehVdsySp20pTfZLcMm9NC1hXf1BKkVKmqa3Sf5B3UihOWaa56iHEGCMAho5IeaVFJn4MVW9rjQa8Sfe0L-kOcABA0EH2MKIReQ-9ReyR0As3yykpN6t5KF-eD0CT9aidcMLCrq2e5mx8n*xU9xC5YpeTfFucRku-sp8LL2tLBZkT7GfjKIhn8uYRBu1boaKDH78uGuduUKlFyX8-ct0pRngyoEeuGlFXvYAAxPC893KW8Wl8AZboXaM_'
		},
		{
			identifier: 'robot3',
			userSig: 'eJxlj1FPgzAUhd-5FYTXGVPKimxvCyzZHFMMzE1fCLZ329Ws7Wghbsb-rqJGEu-r9*Wcc98c13W9Is0vK85VI21pTxo8d*x6xLv4g1qjKCtbBrX4B*FVYw1ltbVQd9BnjFFC*g4KkBa3*GPU6knZoMeNeCm7ku*AISHUH9KgH2Fw18Hl9CGe3yURhpv754LOqjZdFdy-FvEK80EeZlkmG7Y8PYJULafBYjLfT25iqiVqMwjhSDY7xW9TszdJe2wgWyQwmwp5WLdBdL469yotHuD3o9EoYjTqb26hNqhkJ1DiM-9z79d5zrvzAaBQXhU_'
		}
	],
	// avChatRoomId: '@TGS#3JCCOPFG4' // 群ID, 必选,这里为了快速演示，固定了群ID，可以由您指定。
	// avChatRoomId: '@TGS#3JCCOPFG4',
	avChatRoomId:'',
	avChatRoom1: '@TGS#36D3WBLGY',
	avChatRoom2: '@TGS#3B35WBLGV',
	avChatRoom3: '@TGS#36G7WBLGA',
};

module.exports = CONFIG;
