<template>
  <!-- 商品首页列表 -->
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>手机数码</span>
                    <p>
                      <span>手机通讯&nbsp;</span>
                      <span>摄影摄像&nbsp;</span>
                      <span>存储设备&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">手机数码</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">手机通讯</a>
                        <a href="/goods/43.html">摄影摄像</a>
                        <a href="/goods/43.html">存储设备</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>电脑办公</span>
                    <p>
                      <span>电脑整机&nbsp;</span>
                      <span>外设产品&nbsp;</span>
                      <span>办公打印&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">电脑办公</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">电脑整机</a>
                        <a href="/goods/43.html">外设产品</a>
                        <a href="/goods/43.html">办公打印</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>影音娱乐</span>
                    <p>
                      <span>平板电视&nbsp;</span>
                      <span>音响DVD&nbsp;</span>
                      <span>影音配件&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">影音娱乐</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">平板电视</a>
                        <a href="/goods/43.html">音响DVD</a>
                        <a href="/goods/43.html">影音配件</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>服装类</span>
                    <p>
                      <span>男装&nbsp;</span>
                      <span>女装&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">服装类</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">男装</a>
                        <a href="/goods/43.html">女装</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            <!-- 饿了么UI轮播图 -->
            <el-carousel :interval="5000" arrow="always" class="banner-img" style="height:340px">
              <el-carousel-item v-for="(item,index) in sliderlist" :key="index" class="slideshow">
                <img :src="item.img_url" alt class="picCenter" />
                <!-- <h3>{{ item.title }}</h3> -->
              </el-carousel-item>
            </el-carousel>
          </div>
          <!--/幻灯片-->
          <div class="left-220">
            <ul class="side-img-list">
              <!-- 右侧热门商品分类列表 -->
              <li v-for="(item,index) in toplist" :key="index">
                <div class="img-box">
                  <label>{{index+1}}</label>
                  <img :src="item.img_url" />
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html" @click.prevent="hotCommodity(item.id)">{{item.title}}</a>
                  <span>{{item.add_time | formatTime("YYYY-MM-DD HH:mm:ss")}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 手机数码 -->
    <div class="section">
      <div class="main-tit">
        <h2>手机数码</h2>
        <p>
          <a href="/goods/43.html">手机通讯</a>
          <a href="/goods/43.html">摄影摄像</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <!-- 手机数码商品区域 -->
            <li v-for="(item,index) in digitallist" :key="index">
              <a href="#/site/goodsinfo/87" class>
                <div class="img-box">
                  <img :src="item.img_url" />
                </div>
                <div class="info">
                  <h3>{{item.artTitle}}</h3>
                  <p class="price">
                    <b>{{item.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{item.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{item.market_price}}</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 电脑办公 -->
    <div class="section">
      <div class="main-tit">
        <h2>电脑办公</h2>
        <p>
          <a href="/goods/43.html">电脑整机</a>
          <a href="/goods/43.html">外设产品</a>
          <a href="/goods/43.html">办公打印</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <!-- 电脑办公商品区域 -->
            <li v-for="(item,index) in officelist" :key="index">
              <a href="#/site/goodsinfo/92" class>
                <div class="img-box">
                  <img :src="item.img_url" />
                </div>
                <div class="info">
                  <h3>{{item.artTitle}}</h3>
                  <p class="price">
                    <b>{{item.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{item.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{item.market_price}}</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 影音娱乐 -->
    <div class="section">
      <div class="main-tit">
        <h2>影音娱乐</h2>
        <p>
          <a href="/goods/43.html">平板电视</a>
          <a href="/goods/43.html">音响DVD</a>
          <a href="/goods/43.html">影音配件</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <!-- 影音娱乐区域 -->
            <li v-for="(item,index) in recreationlist" :key="index">
              <a href="#/site/goodsinfo/97" class>
                <div class="img-box">
                  <img :src="item.img_url" />
                </div>
                <div class="info">
                  <h3>{{item.artTitle}}</h3>
                  <p class="price">
                    <b>{{item.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{item.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{item.market_price}}</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 服装类 -->
    <div class="section">
      <div class="main-tit">
        <h2>服装类</h2>
        <p>
          <a href="/goods/43.html">男装</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <!-- 服装类区域 -->
            <li v-for="(item,index) in clothinglist" :key="index">
              <a href="#/site/goodsinfo/102" class>
                <div class="img-box">
                  <img :src="item.img_url" />
                </div>
                <div class="info">
                  <h3>{{item.artTitle}}</h3>
                  <p class="price">
                    <b>{{item.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{item.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{item.market_price}}</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      // 左侧分类导航
      catelist: [],
      // 中间轮播图
      sliderlist: [],
      // 右侧分类导航商品
      toplist: [],

      // 分组手机数码商品
      digitallist: [],
      // 分组电脑办公商品
      officelist: [],
      // 分组影音娱乐商品
      recreationlist: [],
      // 分组服装类商品
      clothinglist: []
    };
  },
  created() {
    // 获取商品顶部的轮播图，分类导航数据
    this.$axios.get("site/goods/gettopdata/goods").then(backData => {
      console.log(backData);
      // 中间轮播图
      this.sliderlist = backData.data.message.sliderlist;
      // 右侧分类导航商品
      this.toplist = backData.data.message.toplist;
    });

    // 商品分类分组获取数据
    this.$axios.get("site/goods/getgoodsgroup").then(backData => {
      console.log(backData);
      // 分组手机数码商品
      this.digitallist = backData.data.message[0].datas;
      // 分组电脑办公商品
      this.officelist = backData.data.message[1].datas;
      // 分组影音娱乐商品
      this.recreationlist = backData.data.message[2].datas;
      // 分组服装类商品
      this.clothinglist = backData.data.message[3].datas;
    });
  },
  methods: {
    // 顶部右侧分类导航
    hotCommodity(id){
      this.$router.push(`/detail/${id}`)
    }
  },
};
</script>

<style>
/* 中间轮播图 */
.slideshow {
  height: 340px;
}
.picCenter {
  width: 100%;
  height: 100%;
}
</style>
