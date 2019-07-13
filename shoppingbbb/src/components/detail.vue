<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <!-- 商品详情 -->
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                <img :src="picUrl" alt />
              </div>
              <div class="goods-spec">
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.zhaiyao}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <!-- 饿了么ui计数器 -->
                        <el-input-number
                          v-model="num"
                          @change="handleChange"
                          :min="1"
                          :max="10"
                          label="描述文字"
                        ></el-input-number>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <!-- 切换索引 -->
                  <li>
                    <a href="javascript:;" @click="tabIndex=1" :class="{selected:tabIndex==1}">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;" @click="tabIndex=2" :class="{selected:tabIndex==2}">商品评论</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content entry" v-html="goodsinfo.content" v-show="tabIndex==1"></div>
              <div class="tab-content" v-show="tabIndex==2">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          v-model="addcomment"
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                      <!-- 饿了么ui消息弹出框 -->
                        <el-button :plain="true" name="submit" type="submit" @click="addcommentBtn">提交评论</el-button>
                        <!-- <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="addcommentBtn"
                        />-->
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <!-- 用户评论区 -->
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                      v-if="commentsnum == 0"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="(item,index) in commentslist" :key="index">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{item.user_name}}</span>
                          <span>{{item.reply_time | formatTime('YYYY/MM/DD HH:mm:ss')}}</span>
                        </div>
                        <p>{{item.content}}</p>
                      </div>
                    </li>
                  </ul>
                  <!-- 饿了么评论分页 -->
                  <el-pagination
                    @current-change="handleCurrentChange"
                    background
                    layout="prev, pager, next"
                    :total="commentsnum"
                    class="pagings"
                    :current-page="pageIndex"
                  ></el-pagination>
                </div>
              </div>
            </div>
          </div>
          <!-- 热门商品 -->
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <!-- 右侧热门商品推荐 -->
                  <li
                    v-for="(item,index) in hotgoodslist"
                    :key="index"
                    @click.prevent="hotBtn(item.id)"
                  >
                    <div class="img-box">
                      <a href="#/site/goodsinfo/90" class>
                        <img :src="item.img_url" />
                      </a>
                    </div>
                    <div class="txt-box">
                      <a href="#/site/goodsinfo/90" class>{{item.title}}</a>
                      <span>{{item.add_time | formatTime('YYYY-MM-DD HH:mm:ss')}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      // 切换索引
      tabIndex: 1,
      // 计数器
      num: 1,
      // 左侧商品图片
      picUrl: "",
      // 商品详情
      goodsinfo: {},
      // 右侧热门商品推荐
      hotgoodslist: [],
      // 评论页码
      pageIndex: 1,
      // 评论页容量
      pageSize: 10,
      // 评论总数
      commentsnum: 0,
      // 用户评论
      commentslist: [],
      // 发表评论
      addcomment: ""
    };
  },

  methods: {
    // 分页切换
    handleCurrentChange(val) {
      // console.log(val);
      this.pageIndex = val;
      this.comments();
    },
    // 计数器
    handleChange() {
      // console.log(value);
    },
    // 热门商品点击事件
    hotBtn(id) {
      // console.log(id);
      this.$router.push(`/detail/${id}`);
    },
    // 封装商品详情请求
    hotgoods() {
      this.$axios
        .get(`site/goods/getgoodsinfo/${this.$route.params.id}`)
        .then(backData => {
          console.log(backData);
          this.picUrl = backData.data.message.imglist[0].original_path;
          // 商品详情
          this.goodsinfo = backData.data.message.goodsinfo;
          // 右侧热门商品推荐
          this.hotgoodslist = backData.data.message.hotgoodslist;
        });
    },
    // 封装用户评论请求
    comments() {
      this.$axios
        .get(
          `site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
        )
        .then(backData => {
          // console.log(backData);
          // 用户评论
          this.commentslist = backData.data.message;
          // 评论总数
          this.commentsnum = backData.data.totalcount;
        });
    },
    // 封装发表评论
    addcommentBtn() {
      this.$axios
        .post(`site/validate/comment/post/goods/${this.$route.params.id}`, {
          commenttxt: this.addcomment
        })
        .then(backData => {
          console.log(backData);
          if (backData.status == 200) {
            // 清空评论
            this.addcomment = "";
            // 发表评论弹出框
            this.$message({
              message: "发表成功!!!",
              type: "success"
            });
            // 重新渲染评论区
            this.comments();
          }
        });
    }
  },

  // 监听器
  watch: {
    "$route.params.id"() {
      // 重新获取商品详情数据
      this.hotgoods();
      // 分页重置
      this.pageIndex = 1;
      // 重新获取用户评论数据
      this.comments();
    }
  },

  created() {
    // 商品详情请求
    this.hotgoods();
    // 用户评论请求
    this.comments();
  }
};
</script>

<style>
.tab-content img {
  display: block;
}
.pagings {
  margin-left: 240px;
  margin-top: 60px;
}
.pic-box img {
  height: 380px;
}
</style>
