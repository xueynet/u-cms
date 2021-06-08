<template>
	<view class="index">
		<home v-if="tabberPageLoadFlag.home" :style="{display: curPage != 'home' ? 'none' : ''}" ref="home"
			@switchTab="switchTab"></home>
		<case v-if="tabberPageLoadFlag.case" :style="{display: curPage != 'case' ? 'none' : ''}" ref="case"></case>
		<components v-if="tabberPageLoadFlag.components" :style="{display: curPage != 'components' ? 'none' : ''}"
			ref="components"></components>
		<information v-if="tabberPageLoadFlag.information" :style="{display: curPage != 'information' ? 'none' : ''}"
			ref="information"></information>
		<my v-if="tabberPageLoadFlag.my" :style="{display: curPage != 'my' ? 'none' : ''}" ref="my"></my>

		<view class="cu-tabbar-height"></view>
		<!-- 底部导航 -->
		<view class="cu-bar tabbar bg-white shadow foot">
      <view class="action" @click="navChange" data-cur="home">
        <view class='cuIcon-cu-image'>
          <image :src="'/static/images/tabbar/home' + [curPage=='home'?'_cur':''] + '.png'"></image>
        </view>
        <view :class="curPage=='home'?'text-select-color':'text-color'">首页</view>
      </view>
      <view class="action" @click="navChange" data-cur="case">
        <view class='cuIcon-cu-image'>
          <image :src="'/static/images/tabbar/case' + [curPage=='case'?'_cur':''] + '.png'"></image>
        </view>
        <view :class="curPage=='case'?'text-select-color':'text-color'">案例</view>
      </view>
      <view class="action text-color add-action" @click="navChange" data-cur="components">
        <button class="cu-btn cuIcon-wefill icon-bg shadow"></button>
        <view :class="curPage=='components'?'text-select-color':'text-color'">组件</view>
      </view>
      <view class="action" @click="navChange" data-cur="information">
        <view class='cuIcon-cu-image'>
          <image :src="'/static/images/tabbar/information' + [curPage=='information'?'_cur':''] + '.png'"></image>
        </view>
        <view :class="curPage=='information'?'text-select-color':'text-color'">咨讯</view>
      </view>
      <view class="action" @click="navChange" data-cur="my">
        <view class='cuIcon-cu-image'>
          <image :src="'/static/images/tabbar/my' + [curPage=='my'?'_cur':''] + '.png'"></image>
        </view>
        <view :class="curPage=='my'?'text-select-color':'text-color'">我的</view>
      </view>
    </view>
		
	</view>
</template>

<script>
	import {
		checkUserScope,
		getUserInfo
	} from '@/utils/user';
	import Home from '@/pages/home/home';
	import Case from '@/pages/case/case';
	import Components from '@/pages/components/home';
	import Information from '@/pages/information/information';
	import My from '@/pages/my/my';

	const app = getApp()

	export default {
		components: {
			Home,
			Case,
			Components,
			Information,
			My
		},
		data() {
			return {
				curPage: 'home',
				tabberPageLoadFlag: {
					home: true,
					case: false,
					components: false,
					information: false,
					my: false
				}
			}
		},
		onLoad() {
			// 用于更新用户的信息
			//判断是否已经有token，或者验证成功(程序初始化完毕)
			checkUserScope().then(() => {
				getUserInfo();
			}).catch(() => {})
		},
		onShareAppMessage() {
			switch (this.curPage) {
				case 'home':
					return {
						title: '和东东们一起愉快的玩耍叭',
							imageUrl: '/static/images/share.jpg',
					}
					break
				case 'case':
					return {
						title: '图鸟案例',
							imageUrl: '/static/images/share.jpg',
					}
					break
				case 'components':
					return {
						title: '组件案例',
							imageUrl: '/static/images/share.jpg',
					}
					break
				case 'information':
					return {
						title: '图鸟资讯',
							imageUrl: '/static/images/share.jpg',
					}
					break
				default:
					return {
						title: '和东东们一起愉快的玩耍叭',
							imageUrl: '/static/images/share.jpg',
					}
					break
			}
		},
		onShareTimeline() {
			switch (this.curPage) {
				case 'home':
					return {
						title: '和东东们一起愉快的玩耍叭',
							imageUrl: '/static/images/share.jpg',
					}
					break
				case 'case':
					return {
						title: '图鸟案例',
							imageUrl: '/static/images/share.jpg',
					}
					break
				case 'components':
					return {
						title: '组件案例',
							imageUrl: '/static/images/share.jpg',
					}
					break
				case 'information':
					return {
						title: '图鸟资讯',
							imageUrl: '/static/images/share.jpg',
					}
					break
				default:
					return {
						title: '和东东们一起愉快的玩耍叭',
							imageUrl: '/static/images/share.jpg',
					}
					break
			}
		},
		onPageScroll() {
			switch (this.curPage) {
				case 'home':
					this.$refs.home.handleSearchInputShow()
					break
				default:
					break
			}
		},
		onReachBottom() {
			switch (this.curPage) {
				case 'case':
					this.$refs.case.handleNextPage()
					break
				case 'information':
					this.$refs.information.handleNextPage()
					break
				default:
					break
			}
		},
		methods: {
			navChange(e) {
				this.curPage = this.$getDataSet(e, 'cur')
				this.tabberPageLoadFlag[this.curPage] = true

				if (this.curPage == 'case') {
					this.$refs.case && this.$refs.case.switchNavScrollStatus(true)
				} else {
					this.$refs.case && this.$refs.case.switchNavScrollStatus(false)
				}
			},
			switchTab(name) {
				this.curPage = name
				if (!this.tabberPageLoadFlag[this.curPage]) {
					this.tabberPageLoadFlag[this.curPage] = true
				}

				if (this.curPage == 'case') {
					this.$refs.case && this.$refs.case.switchNavScrollStatus(true)
				} else {
					this.$refs.case && this.$refs.case.switchNavScrollStatus(false)
				}
			}
		}
	}
</script>

<style>
	.navbar__item .avatar {
		background-color: currentColor;
		border-radius: 100%;
		transform: scale(0.8);
		opacity: 0;
		transition: all 0.55s cubic-bezier(0.71, 0.03, 0.23, 0.95);
	}

	.navbar__item.-blue {
		color: #06b8ff;
	}

	.navbar__item.-orange {
		color: #f2704d;
	}

	.navbar__item.-navy-blue {
		color: #405fff;
	}

	.navbar__item.-yellow {
		color: #f8cd4b;
	}

	.navbar__item.-purple {
		color: #8444d6;
	}

	.avatar.-blue {
		color: #06b8ff;
	}

	.avatar.-orange {
		color: #f2704d;
	}

	.avatar.-navy-blue {
		color: #405fff;
	}

	.avatar.-yellow {
		color: #f8cd4b;
	}

	.avatar.-purple {
		color: #8444d6;
	}

	.navbar__item:hover .avatar {
		transform: translateY(-36px) scale(1.4);
		opacity: 1;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1),
			-1px -1px 5px rgba(255, 255, 255, 1);
	}

	.navbar__item:hover::before {
		opacity: 1;
	}

	.navbar__item:hover::after {
		opacity: 0.4;
	}

	.navbar__item:hover .navbar__icon {
		transform: translateY(-23px) scale(1);
		color: #fff;
		transition-delay: 0.1s, 0.1s;
	}

	/* .navbar__item:hover .avatar .icon-name{
	    transform: translateY(-36px) scale(1.4);
	    opacity: 1;
	    box-shadow: 1px 1px 5px rgba(0,0,0,0.1),
	    -1px -1px 5px rgba(255,255,255,1);
	  } */
	.navbar__item:hover .icon-name {
		/* font-size: 20rpx !important; */
		/* margin-top: 20rpx !important; */
		transition-delay: 0.1s, 0.1s;
	}

	.navbar__icon {
		bottom: -13px;
		transition: all 0.5s cubic-bezier(0.71, 0.03, 0.23, 0.95);
		transition-delay: 0.1s;
		display: inline-block;
		position: relative;
		z-index: 2;
	}
</style>
