<template>
  <view class="my">
    <image :src="bgImage" mode='widthFix' class='tn-bg'></image>

    <navigator target="miniProgram" app-id='wx7c69ce7f11709260' path='/pages/other/other?id=1' version='release'
      hover-class="none">
      <view class="dong">
        <view class="monster">
          <view class="monster__face">
            <view class="monster__eye avatar-eye avatar-eye--green eye--left">
              <view class="avatar-eye-pupil pupil--green"><span class="avatar-eye-pupil-blackThing"><span class="avatar-eye-pupil-lightReflection"></span></span></view>
            </view>
            <view class="monster__eye avatar-eye avatar-eye--violet eye--right">
              <view class="avatar-eye-pupil pupil--pink"><span class="avatar-eye-pupil-blackThing"><span class="avatar-eye-pupil-lightReflection"></span></span></view>
            </view>
            <view class="monster__noses">
              <view class="monster__nose"></view>
              <view class="monster__nose"></view>
            </view>
            <view class="monster__mouth">
              <view class="monster__top"></view>
              <view class="monster__bottom"></view>
            </view>
          </view>
        </view>
      </view>
    </navigator>

    <view class="" :style="'padding-top:' + CustomBar + 'px;'">
      <view class="cu-list menu my_logo">
        <view class="cu-item">
          <view class="cu-avatar round xl margin-right-sm shadow-blur-lg bg-img open-data">
            <open-data type="userAvatarUrl"></open-data>
          </view>
          <view class='content flex-sub'>
            <view class='padding-left-sm text-white text-xxl text-shadow-a padding-top-sm'>
              <open-data type="userNickName"></open-data>
            </view>
            <view class='text-lg flex justify-between padding-left-sm padding-top-sm text-white text-shadow-a'>
              欢迎访问图鸟
              <!-- <view class="text-sm">
                  <text class="icon-attentionfill"></text> 10
                  <text class="icon-appreciatefill"></text> 20
                  <text class="icon-messagefill"></text> 30
                </view> -->
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="margin flex">
      <view class='bg-white flex-sub margin-right my-radius shadow-lg'>
        <view class="cu-list grid col-1 no-border my-iconcolor my-radius cu-list-no">
          <view class="cu-item my-icon">
            <view @click="copyWebsite">
              <image src='/static/images/youhui.png' class='png' mode='aspectFit'></image>
              <text class="text-xl text-my">Git地址</text>
            </view>
          </view>
        </view>
      </view>
      <view class='bg-white flex-sub my-radius shadow-lg'>
        <view class="cu-list grid col-1 no-border my-iconcolor my-radius cu-list-no">
          <view class="cu-item my-icon" @click="navOfficial">
            <!-- <navigator url="../../pages/official/official" delta="1" hover-class="none"> -->
            <image src='/static/images/about.png' class='png' mode='aspectFit'></image>
            <text class="text-xl text-my">图鸟公众号</text>
            <!-- </navigator> -->
          </view>
        </view>
      </view>
    </view>

    <view class="cu-list menu card-menu margin-top-xl shadow-shop bg-white text-black my-radius sm-border margin-bottom">
      <view class="cu-item ">
        <button class='content cu-btn' @click="navAbout">
          <image src='/static/images/faxian.png' class='png' mode='aspectFit'></image>
          <text class='text-lg margin-sm'>关于图鸟</text>
        </button>
      </view>
      <view class="cu-item ">
        <button class='content cu-btn' open-type="contact">
          <image src='/static/images/fenxiang.png' class='png' mode='aspectFit'></image>
          <text class='text-lg margin-sm'>合作勾搭</text>
        </button>
      </view>
      <view class="cu-item">
        <button class='content cu-btn' open-type="feedback">
          <image src='/static/images/fankui.png' class='png' mode='aspectFit'></image>
          <text class='text-lg margin-sm'>问题反馈</text>
        </button>
      </view>
      <view class="cu-item" @click="callPhoneNumber" data-number="13699700470">
        <view class='content'>
          <image src='/static/images/kefu.png' class='png' mode='aspectFit'></image>
          <text class='text-lg margin-sm'>技术支持</text>
        </view>
        <view class="text-gray">136 9970 0470</view>
      </view>
    </view>

  </view>
</template>

<script>
  import {
    getServerConfigValue
  } from '@/api/server-config';

  var util = require('@/utils/util.js');
  export default {
    name: 'My',
    data() {
      return {
        CustomBar: this.CustomBar,
        SystemPlatform: this.SystemPlatform,
        bgImage: '', // 个人背景图地址

        dongdong: [{
          name: '一个香吻',
        }, {
          name: '一包辣条',
        }, {
          name: '一片西瓜',
        }, {
          name: '一罐汽水',
        }, {
          name: '一条雪糕',
        }, {
          name: '一杯奶茶',
        }]
      }
    },
    created() {
      this._loadData()
    },
    methods: {
      //拨打固定电话
      callPhoneNumber() {
        uni.makePhoneCall({
          phoneNumber: "13699700470",
        });
      },
      // 复制Github地址
      copyWebsite() {
        uni.setClipboardData({
          data: "https://gitee.com/TSpecific/tn_website_opensource",
        })
      },

      // 关于图鸟
      navAbout() {
        uni.navigateTo({
          url: '../about/about'
        })
      },

      // 加载数据
      _loadData() {

        getServerConfigValue({
          field: 'mp_person_bg'
        }).then((res) => {
          const {
            data
          } = res

          this.bgImage = data.hasOwnProperty('mp_person_bg') ? data.mp_person_bg : ''

        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url("@/pages/case/cat.css");
  @import url("@/pages/case/bird.css");

  .cu-list.menu>.cu-item {
    background-color: rgba(0, 0, 0, 0);
  }

  .cu-modal .cu-dialog>.cu-bar:first-child .action {
    margin-right: 30rpx;
  }

  .bg-green {
    background-color: #7FD02B;
  }

  .my_logo {
    background: none;
    padding: 50rpx 0 30rpx 0;
  }

  .open-data {
    overflow: hidden;
    display: block;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  }

  .my-radius {
    border-radius: 12rpx;
    overflow: hidden
  }

  .my-icon image {
    width: 100rpx;
    height: 100rpx;
    display: inline-block;
    margin: 0 auto
  }

  .my-iconcolor {
    background: rgba(255, 255, 255, 0.96)
  }

  .shadow-shop {
    box-shadow: 0rpx 0rpx 90rpx 0rpx rgba(0, 0, 0, 0.1);
  }

  .qrcode-img {
    position: fixed;
    width: 80rpx;
    height: 80rpx;
    bottom: 350rpx;
    right: 30rpx;
    z-index: 1024;
    opacity: 0.8;
    box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
    border: none
  }

  .text-my {
    color: #aaa !important;
  }
</style>
