<template>
	<view>
		<view class="head404"></view>
		<view class="txtbg404"></view>
		<view class="txtbox">
			<view>对不起，您请求的页面不存在、或已被删除、或暂时不可用</view>
			<view class="paddingbox">请点击以下链接继续浏览网页</view>
			<view>》<a style="cursor:pointer" οnclick="history.back()">返回上一页面</a></view>
			<view>》<a href="https://www.daixiaorui.com">返回网站首页</a></view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.head404 {
		width: 580px;
		height: 234px;
		margin: 50px auto 0 auto;
		background: url(../../static/images/head404.png) no-repeat;
	}

	.txtbg404 {
		width: 499px;
		height: 169px;
		margin: 10px auto 0 auto;
		background: url(../../static/images/txtbg404.png) no-repeat;
	}

	.txtbg404 .txtbox {
		width: 390px;
		position: relative;
		top: 30px;
		left: 60px;
		color: #eee;
		font-size: 13px;
	}

	.txtbg404 .txtbox view {
		margin: 5px 0;
		line-height: 18px;
	}

	.txtbg404 .txtbox .paddingbox {
		padding-top: 15px;
	}

	.txtbg404 .txtbox view a {
		color: #eee;
		text-decoration: none;
	}

	.txtbg404 .txtbox view a:hover {
		color: #FC9D1D;
		text-decoration: underline;
	}
</style>
