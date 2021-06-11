<template>
	<view class="coopera">
		<tn-custom>
			<block slot="left">
				<view class='action border-custom text-white' @click="Back">
					<text class='cuIcon-back'></text>
					<text class='cuIcon-homefill'></text>
				</view>
			</block>
		</tn-custom>
		<view class="uni-form-item uni-column">
			<view class="title">合作意向</view>
			<view class="input-from">
				<view>
					<input class="uni-input" name="companyName" v-model="addressData.companyName"
						placeholder="请输入您的公司名字" />
				</view>
				<view>
					<input class="uni-input" name="mobile" v-model="addressData.mobile" placeholder="请输入您的手机号码" />
				</view>
				<view>
					<input class="uni-input" name="customerName;" v-model="addressData.customerName"
						placeholder="请输入您的姓名" />
				</view>
				<view>
					<textarea class="message_form_textarea" name='demand' v-model="addressData.demand"
						placeholder="请把问题留给我们，我们会提供让您满意的答复~"></textarea>
				</view>
				<view>
					<button form-type="submit" @click="confirm">提交</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressData: {
					companyName: '',
					mobile: '',
					customerName: '',
					demand: '',
				},
				rules: {
					username: {
						rules: [{
							required: true,
							errorMessage: '请输入注册手机号码'
						}, {
							validateFunction: function(rule, value, data, callback) {
								let iphoneReg = /^1[0-9]{10}$/
								if (!iphoneReg.test(value)) {
									callback('手机号码格式不正确，请重新填写')
								}
								return true
							}
						}]
					}
				}
			}
		},
		methods: {
			// 返回
			Back() {
				history.back();
			},
			confirm() {
				let data = this.addressData;
				console.log(JSON.stringify(data))
			},
		}
	}
</script>

<style>
	.coopera .action {
		width: 100px;
	}

	.title {
		text-align: center;
		font-size: 24px;
		padding-bottom: 5px;
	}

	.input-from {
		box-sizing: border-box;
		box-shadow: rgb(0 0 0 / 10%) 0px 0px 38px 0px;
		padding: 30px;
		margin-top: 10px;
		line-height: 30px;
	}

	.input-from input {
		width: 100%;
		height: 3rem;
		text-indent: 10px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		border: .026667rem solid #ddd;
		margin-bottom: .266667rem;
		padding-left: .266667rem;
		outline: none;
	}

	.input-from view {
		margin-bottom: 15px;
	}

	.message_form_textarea {
		width: 100%;
		text-indent: 10px;
		border: .026667rem solid #ddd;
		padding-top: 15px;
	}

	.input-from button {
		background: #0070ce;
		color: #fff;
	}
</style>
