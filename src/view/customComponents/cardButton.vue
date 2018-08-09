<style lang="less">
    @import './styles/card-button.less';
</style>

<template>
    <Card :padding="0" :style="{width:buttonWidth, height:buttonHeight}">
        <div class="card-con">
            <Col class="card-icon-con" :style="{backgroundColor: color, color: 'white'}">
                <Row class="height-100" type="flex" align="middle" justify="center">
                    <Icon :type="iconType" :size="iconSize"></Icon>
                </Row>
            </Col>
            <Col span="24">
                <Row type="flex" align="middle" justify="center" >
                    <p class="intro-text">{{ introText }}</p>
                </Row>
            </Col>
        </div>
    </Card>
</template>

<script>
export default {
  name: 'cardButton',
  props: {
    idName: String,
    endVal: Number,
    decimals: {
      type: Number,
      default: 2
    },

    unit: String,
    color: String,
    iconType: String,
    introText: {
      type: String,
      default: '按钮'
    },
    countSize: {
      type: String,
      default: '30px'
    },
    countWeight: {
      type: Number,
      default: 700
    },
    iconSize: {
      type: Number,
      default: 40
    },
    buttonWidth: {
      type: String,
      default: '120px'
    },
    buttonHeight: {
      type: String,
      default: '120px'
    },
    buttonText: {
      type: String,
      default: '按钮'
    }

  }
}
</script>

<style scoped>

</style>
