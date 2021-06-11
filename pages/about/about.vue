<!-- <template>
  <view class="about">
    <tn-custom>
      <block slot="left">
        <view class='action border-custom text-white' :style="'width:' + Custom.width + 'px;height:' + Custom.height + 'px;margin-left:calc(750rpx - ' + Custom.right + 'px)'"
          @click="navHome">
          <text class='cuIcon-back'></text>
          <text class='cuIcon-homefill'></text>
        </view>
      </block>
    </tn-custom>

    <canvas canvas-id="bubble" :style="'width:' + width + 'px;height:' + height + 'px'" class="like-fx"></canvas>
    <like-fx ref="likeFx" :width="width" :height="height"></like-fx>

    <canvas canvas-id="bubble" :style="'width:' + 375 + 'px;height:' + 1920 + 'px'" class="like-fx"></canvas>

    <view class="container about-bg" :style="'margin-top:-' + CustomBar + 'px;background-image:url(' + background_image + ')'">
     <view class="detail-imgs">
            <block>
			
                <image src='{{background_image}}' mode='widthFix' class='tn-bg-cart'></image>
            </block>
        </view>
    </view>

    <button class='' open-type="contact">
      <image src='/static/images/fenxiang.png' class='share-img png round shadow-lg bg-white' mode='aspectFit'>
      </image>
    </button>
  </view>
</template>

<script>
  import LikeFx from '@/components/likeFx/likeFx.vue'
  import {
    getServerConfigValue
  } from '@/api/server-config';

  export default {
    components: {
      LikeFx
    },
    data() {
      return {
        Custom: this.Custom,
        CustomBar: this.CustomBar,
        background_image: '', // 背景图片
        from: '', // 标记从什么地方跳转到当前页面
        animation_timer: null, // 动画定时器
        width: 375,
        height: 1920
      }
    },
    onLoad(options) {
      this.from = options.from || ''
      this._loadData()
      this._startLikeAnimation()
    },
    onShareAppMessage() {
      return {
        title: '和东东们一起愉快的玩耍叭',
        imageUrl: '/static/images/share.jpg',
        path: '/pages/about/about?from=share'
      }
    },
    onShareTimeline() {
      return {
        title: '关于雪印',
        query: 'from=share'
      }
    },
    methods: {
      // 跳转回首页
      navHome() {
        clearTimeout(this.animation_timer)

        if (this.from == 'share') {
          uni.navigateTo({
            url: '../index/index'
          })
        } else {
          uni.navigateBack({
            delta: 1
          })
        }
      },
      // 加载数据
      _loadData() {
        getServerConfigValue({
          field: 'mp_about_bg'
        }).then((res) => {
          const {
            data
          } = res
          this.background_image = data.hasOwnProperty('mp_about_bg') ? data.mp_about_bg : ''
        })
      },
      _startLikeAnimation() {
        this.animation_timer = setInterval(() => {
          // this.$refs.likeFx.likeClick();
        }, 300)
      }
    }
  }
</script>

<style scoped>
  /* pages/about/about.wxss */
  .about-bg {
    background-size: cover;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    color: #fff;
  }

  .edit-fixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 1024;
    box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.1);
  }

  .detail-imgs image {
    width: 100%;
    float: left;
    /* height:400rpx; 不定高了*/
    border: 0;
    padding: 0;
    margin: 0
  }

  .share-img {
    position: fixed;
    padding: 10rpx;
    width: 100rpx;
    height: 100rpx;
    /* top: 680rpx; */
    bottom: 200rpx;
    right: 20rpx;
    z-index: 1024;
    opacity: 0.8;
    box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
    border: none;
  }

  .about {
    margin: 0;
    width: 100%;
    height: 100vh;
    color: #fff;
    background: linear-gradient(-120deg, #F15BB5, #9A5CE5, #01BEFF, #00F5D4);
    /* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */
    background-size: 500% 500%;
    animation: gradientBG 15s ease infinite;
  }

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .container {
    width: 100%;
    position: absolute;
    text-align: center;
  }

  .like-fx {
    position: fixed;
    right: 0;
    z-index: 1024;
    pointer-events: none;
    /* background-color: red; */
  }
</style>
 -->
<template>
	<view class="about">
		<tn-custom>
			<block slot="left">
				<view class='action border-custom text-white' @click="Back">
					<text class='cuIcon-back'></text>
					<text class='cuIcon-homefill'></text>
				</view>
			</block>
		</tn-custom>
		<!-- 公司简介 -->
		<view class="jianjie">
			<view class="title">公司简介</view>
			<view class="content">
				重庆雪印网络科技有限公司是一家专注于互联网与移动互联网领域的创新型公司，是中国领先的互联网软件技术及应用服务提供商。公司主要服务于中小型 企业、学校、
				政府，提供网站建设、网站设计制作、电子商务平台开发运营、应用系统开发、移动互联网产品开发、小程序开发、APP定制开发、网络推广营销于一体的专业服务。
			</view>
		</view>
		<!-- 公司地址 -->
		<view class="card">
			<view>邮箱:<text>chenglian@xuey.net</text></view>
			<view>联系方式:<text>0755-83360966</text></view>
			<view>公司地址:<text>重庆市渝北区回兴街道果糖路169号盛世明珠5栋15-7</text></view>
		</view>
		<view class="card">
			<map :latitude="latitude" :longitude="longitude" :markers="marker" :scale="scale" :polyline="polyline">
				<!-- <cover-view class="test" @click="getSearch">
					<input type="text" placeholder="搜索位置" />
				</cover-view> -->
			</map>
		</view>
	</view>
</template>

<script>
	import {
		getServerConfigValue
	} from '@/api/server-config';

	export default {
		data() {
			return {
				Custom: this.Custom,
				CustomBar: this.CustomBar,
				background_image: '', // 背景图片
				from: '', // 标记从什么地方跳转到当前页面
				animation_timer: null, // 动画定时器
				// 地图
				latitude: 29.658574, //纬度
				longitude: 106.587531, //经度
				scale: 12, //缩放级别
				compass: true,
				// show-compass:true,
				// enable-3D:false,
				polyline: [{ //指定一系列坐标点，从数组第一项连线至最后一项
					points: [{
							latitude: 29.658574,
							longitude: 106.587531
						},
						{
							latitude: 29.658574,
							longitude: 106.587531
						},
					],
					color: "#0000AA", //线的颜色
					width: 1, //线的宽度
					// 　　　　dottedLine:true,//是否虚线
					arrowLine: true, //带箭头的线 开发者工具暂不支持该属性
				}],
				marker: [
					{
						id: 0,
						latitude: 29.658574, //纬度
						longitude: 106.587531, //经度
						iconPath: '', //显示的图标        
						rotate: 0, // 旋转度数
						width: 10, //宽
						height: 20, //高
						title: '我在这里', //标注点名
						alpha: 0.5, //透明度
						label: { //为标记点旁边增加标签   //因背景颜色H5不支持
							// content: 'Hello,I am here', //文本
							color: 'red', //文本颜色
						},
						callout: { //自定义标记点上方的气泡窗口 点击有效  
							content: '盛世明珠', //文本
							color: '#ffffff', //文字颜色
							fontSize: 14, //文本大小
							borderRadius: 2, //边框圆角
							bgColor: '#00c16f', //背景颜色
							display: 'ALWAYS', //常显
						},
					},
					// {
					// 	id: 1,
					// 	latitude: 34.79970, //纬度
					// 	longitude: 113.64000, //经度
					// 	iconPath: '', //显示的图标        
					// 	rotate: 0, // 旋转度数
					// 	width: 10, //宽
					// 	height: 20, //高
					// 	title: '我在这里', //标注点名
					// 	alpha: 0.5, //透明度
					// 	label: { //为标记点旁边增加标签   //因背景颜色H5不支持
					// 		color: 'red', //文本颜色
					// 	},
					// 	callout: { //自定义标记点上方的气泡窗口 点击有效  
					// 		content: '硅谷广场旁边', //文本
					// 		color: '#ffffff', //文字颜色
					// 		fontSize: 14, //文本大小
					// 		borderRadius: 2, //边框圆角
					// 		bgColor: '#00c16f', //背景颜色
					// 		display: 'ALWAYS', //常显
					// 	},
					// }
				],
			}
		},
		methods: {
			// 返回上一页
			Back() {
				history.back();
			},
		}
	}
</script>
<style>
	.action {
		width: 100px;
	}

	.jianjie .title {
		text-align: center;
		font-size: 24px;
		padding-bottom: 5px;
	}

	.card {
		box-sizing: border-box;
		box-shadow: rgb(0 0 0 / 10%) 0px 0px 38px 0px;
		padding: 30px;
		margin-top: 10px;
		line-height: 30px;
	}
	.card map{
		width: auto;
		height: 300px;
		padding-bottom: 50px;
	}
	.jianjie .content {
		box-sizing: border-box;
		box-shadow: rgb(0 0 0 / 10%) 0px 0px 38px 0px;
		padding: 30px;
		margin-top: 10px;
		text-indent: 35px;
		line-height: 30px;
	}
</style>
