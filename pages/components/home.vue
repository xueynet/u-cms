<template>
	<view class="components-home">
		<view style="margin-top:-50rpx;height: 486rpx;">
			<image src='https://s1.ax1x.com/2020/09/16/wccQQP.png' mode='widthFix' class='png'
				style='width:100%;height:486rpx'></image>
		</view>
		<view class="title-header">
			<view class="title-text">
				酷 / 炫 / 组 / 件
			</view>
		</view>

		<view class='nav-list margin-top'>
			<navigator open-type="navigate" hover-class='none' :url="'/tn_components/' + item.title"
				:class="'nav-li bg-kuxuan' + (index+1)" v-for="(item, index) in kuxuan" :key="index">
				<view class="nav-name">{{item.name}}</view>
			</navigator>
		</view>

		<view class="title-header">
			<view class="title-text">
				样 / 式 / 组 / 件
			</view>
		</view>

		<view class='nav-list margin-top'>
			<navigator open-type="navigate" hover-class='none' :url="'/tn_components/' + item.title"
				:class="'nav-li bg-exper' + (index+1)" v-for="(item, index) in yangshi" :key="index">
				<view class="nav-name">{{item.name}}</view>
			</navigator>
		</view>

		<view class="title-header">
			<view class="title-text">
				界 / 面 / 组 / 件
			</view>
		</view>

		<view class='nav-list margin-top'>
			<navigator open-type="navigate" hover-class='none' :url="'/tn_components/' + item.title"
				:class="'nav-li bg-inter' + (index+1)" v-for="(item, index) in inter" :key="index">
				<view class="nav-name">{{item.name}}</view>
			</navigator>
		</view>
		
		<view class="title-header">
			<view class="title-text">
				有 / 情 / 链 / 接
			</view>
		</view>
		
		<view class='nav-list margin-top'>
			<navigator open-type="navigate" hover-class='none' :url="item.url"
				:class="'nav-li bg-exper' + (index+1)" v-for="(item, index) in lianjie" :key="index">
				<view class="nav-name">{{item.name}}</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Components',
		data() {
			return {
				kuxuan: [{
						title: 'gamecube',
						name: '魔方游戏',
						color: ''
					},
					{
						title: 'pano',
						name: '3D全景图',
						color: ''
					}
				],

				yangshi: [{
						title: 'bggrad',
						name: '渐变动画',
						color: ''
					},
					{
						title: 'bgcolor',
						name: '纯色过渡',
						color: ''
					},
					{
						title: 'ancube',
						name: '立方体',
						color: ''
					},
					{
						title: 'anloading',
						name: '加载动画',
						color: ''
					}
				],
				lianjie: [{
						url:'https://gc.zbj.com/',
						title: 'bggrad',
						name: '八戒工程',
						color: ''
					},
					{
						url:'http://autoorigin.cn/',
						title: 'bgcolor',
						name: '驰源',
						color: ''
					},
					{
						url:'https://www.leadgct.com/',
						title: 'ancube',
						name: '领先微晶',
						color: ''
					},
					{
						url:'https://www.kuangsha2020.com/',
						title: 'anloading',
						name: '狂沙科技',
						color: ''
					}
				],
				inter: [{
					title: 'mimicry',
					name: '新拟态',
					color: ''
				}, {
					title: 'theme',
					name: '主题切换',
					color: ''
				}]
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.bg-top-blue {
		background-image: linear-gradient(135deg, #52B5FC, #746BFE);
		color: #fff;
	}
</style>
