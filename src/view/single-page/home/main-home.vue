<style lang="less">
  @import "../../../styles/common.less";

  .user-infor{
    height: auto;
    padding-bottom: 20px;
    padding-top: 10px;
  }
  .avator-img{
    display: block;
    width: 80%;
    max-width:90px;
    height: auto;
  }

  .slot-text{
    font-size: 22px;
  }
  .title-text{
    font-size:16px;
  }
  .role-text{
    font-size:18px;
    font-weight: 400;
  }

  .count-style{
    font-size: 32px;
  }

  .card-user-infor-name{
    font-size: 2em;
    color: #2d8cf0;
  }
  .welcome{
    font-size: 20px;
    color: #313540;
    margin-right: 15px;
  }

</style>
<template>
  <div class="home-main">
    <Row :gutter="10">
      <Col :md="24" :lg="24">
        <Row class-name="home-page-row1" :gutter="10">
          <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">
            <Card>
              <Row type="flex" class="user-infor">
                <Col span="24" :md="24" :lg="24">
                  <Row class-name="made-child-con-middle" type="flex" align="middle">
                    <Col>
                      <img class="avator-img" src='../../../images/ic-manager.png'/>
                    </Col>
                    <Col>
                      <div>
                        <p class="welcome">你好, 欢迎登录:</p>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <b class="card-user-infor-name">{{user}}</b>
                        <p class="role-text">{{role}}</p>
                      </div>
                    </Col>

                  </Row>
                </Col>
              </Row>
              <div class="line-gray"></div>
              <Row class="margin-top-8">
                <Col span="24"><p class="notwrap">上次登录时间:{{" "+lastVisitTime}}</p></Col>

              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col :md="24" :lg="24">
        <Row class-name="home-page-row1" :gutter="10">
          <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">
            <Card>
              <p slot="title">
                <Icon type="social-windows"></Icon>
                快捷菜单
              </p>
              <Row type="flex" :gutter="20">
                <Col :style="{marginBottom: '10px', marginLeft:'10px', marginRight:'10px'}">
                  <card-button iconType="md-cash"
                               intro-text="收银结算"
                               @click.native="toCollectMoney"
                               color="#2d8cf0"></card-button>
                </Col>
                <Col :style="{marginBottom: '10px', marginLeft:'10px', marginRight:'10px'}">
                  <card-button iconType="md-person-add"
                               intro-text="会员办理"
                               @click.native="toAddMember"
                               color="#64d572"></card-button>
                </Col>

                <Col :style="{marginBottom: '10px', marginLeft:'10px', marginRight:'10px'}">
                  <card-button iconType="md-cart"
                               intro-text="商品库存"
                               @click.native="toStore"
                               color="#f25e43"></card-button>
                </Col>

              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col :md="24" :lg="24">
        <Card>
          <p slot="title">
            <Icon type="podium"></Icon>
            营业概况
          </p>
          <Row :gutter="20">
            <i-col span="6" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;">
              <infor-card :color="infor.color" :icon="infor.icon" :icon-size="48" style="border: 1px solid #dcdee2">
                <count-to :end="infor.count" count-class="count-style" :style="{color:infor.color}" :decimals="infor.decimals">
                  <span class="slot-text" :style="{color:infor.color}" slot="right">{{infor.unit}}</span>
                </count-to>
                <p class="title-text">{{ infor.title }}</p>
              </infor-card>
            </i-col>
          </Row>
          <!--<Row :gutter="10">-->
           <!--<Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">-->
              <!--<infor-card-->
                <!--id-name="dayIncomed_count"-->
                <!--:end-val="count.dayIncome"-->
                <!--iconType="social-yen"-->
                <!--color="#F78C68"-->
                <!--:decimals="decimals"-->
                <!--unit="元"-->
                <!--intro-text="今日收入"-->
              <!--&gt;</infor-card>-->
            <!--</Col>-->
            <!--<Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">-->
              <!--<infor-card-->
                <!--id-name="outstanding_count"-->
                <!--:end-val="count.outstanding"-->
                <!--iconType="ios-compose"-->
                <!--color="#ff9900"-->
                <!--:decimals="decimals"-->
                <!--unit="元"-->
                <!--intro-text="挂单待结"-->
              <!--&gt;</infor-card>-->
            <!--</Col>-->
            <!--<Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">-->
              <!--<infor-card-->
                <!--id-name="memberCount_count"-->
                <!--:end-val="count.memberCount"-->
                <!--iconType="ios-people"-->
                <!--color="#9A66E4"-->
                <!--:decimals="decimalsCount"-->
                <!--unit="人"-->
                <!--:iconSize="50"-->
                <!--intro-text="会员人数"-->
              <!--&gt;</infor-card>-->
            <!--</Col>-->
            <!--<Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">-->
              <!--<infor-card-->
                <!--id-name="orderCount_count"-->
                <!--:end-val="count.orderCount"-->
                <!--iconType="ios-paper"-->
                <!--color="#E46CBB"-->
                <!--:decimals="decimalsCount"-->
                <!--unit="个"-->
                <!--intro-text="今日订单数量"-->
              <!--&gt;</infor-card>-->
            <!--</Col>-->

          <!--</Row>-->
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  // import userFlow from '../../customComponents/userFlow.vue';
  // import countUp from '../../customComponents/countUp.vue';
  // import inforCard from '../../customComponents/inforCard.vue';
  import Cookies from 'js-cookie';

  import cardButton from '../../customComponents/cardButton.vue';
  import { getStatisticsByDay,getMemberCount,getStatisticsOrdersByDay} from '@/api/data'
  import InforCard from '_c/info-card'
  import CountTo from '_c/count-to'
  export default {
    name: 'main-home',
    components: {
      cardButton,
      InforCard,
      CountTo,
    },
    data () {
      return {
        decimals: 2,
        decimalsCount: 0,
        inforCardData: [
          { title: '今日收入', icon: 'md-person-add', count: 803, unit:'元', color: '#2d8cf0', decimals:2},
          { title: '挂单待结', icon: 'md-locate', count: 23432, unit:'元', color: '#19be6b', decimals:2 },
          { title: '会员人数', icon: 'md-help-circle', count: 142, unit:'人', color: '#ff9900', decimals:0 },
          // { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
          // { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
          { title: '今日订单数量', icon: 'md-map', count: 14, unit:'个', color: '#9A66E4', decimals:0 }
        ],
        showAddNewTodo: false,
        newToDoItemValue: ''
      };
    },
    computed: {

      user () {
        return Cookies.get('user');
      },
      role () {
        return Cookies.get('role');
      },
      lastVisitTime () {
        return Cookies.get('lastTime');
      },
      currentYear () {
        this.todayYear = new Date().format('yyyy');
        return this.todayYear;
      }
    },
    methods: {
      init () {
        let date = new Date().format('yyyy-MM-dd')
        let data = {
          day: date,
          status: 1
        };

        // 获取今日收入统计
        getStatisticsByDay(data).then(res => {
          if (res.data.code === 100) {
            this.inforCardData[0].count =  res.data.data.total;
          } else {
            this.$Message.error({
              content: res.data.msg,
              duration: 2
            })
          }
        }).catch(err => {
          console.log(err)
        });

        let data2 = {
          day: date,
          status: 0
        };
        // 获取挂单待结金额
        getStatisticsByDay(data2).then(res => {
          if (res.data.code === 100) {
            this.inforCardData[1].count = res.data.data.total;
          } else {
            this.$Message.error({
              content: res.data.msg,
              duration: 2
            })
          }
        }).catch(err => {
          console.log(err)
        });



        // 获取会员数量
        getMemberCount().then(res => {
          if (res.data.code === 100) {
            this.inforCardData[2].count = res.data.data;
          } else {
            this.$Message.error({
              content: res.data.msg,
              duration: 2
            })
          }
        }).catch(err => {
          console.log(err)
        });



        // 获取今日订单
        // 获取会员数量
        getStatisticsOrdersByDay(data).then(res => {
          if (res.data.code === 100) {
            this.inforCardData[3].count = res.data.data.length;
          } else {
            this.$Message.error({
              content: res.data.msg,
              duration: 2
            })
          }
        }).catch(err => {
          console.log(err)
        });
      },
      toAddMember () { // 添加会员
        this.$router.push({
          name: 'member_add'
        });
      },
      toStore () { // 商品库存
        this.$router.push({
          name: 'storeGoods_index'
        });
      },
      toCollectMoney () {
        this.$router.push({
          name: 'order-add'
        });
      }
    },
    mounted () {
      this.init();
    }
  };
</script>
