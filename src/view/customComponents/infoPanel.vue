<style lang="less">
    .card-icon-con{
        color: white;
        border-radius: 3px 3px 0 0 ;
    }
    .card-con{
        cursor:pointer;
        height: auto !important;
        padding: 8px;
    }
    .title-text{
        font-size:18px;
        font-weight:400;
        margin-top: 5px;
        color:white;
    }

    .subtitle-text{
        font-size:16px;
        font-weight:400;
        color:#464c5b;
    }

    .icon-style{
        padding-top: 10px;
        padding-bottom: 10px;
    }

</style>

<template>
    <Card :padding="0" :style="{width:panelWidth, backgroundColor: color, color: 'white'}" :id="idName">
        <div class="card-con">
            <Col class="card-icon-con" >
                <Row class="icon-style" type="flex" align="middle" justify="center">
                    <Icon :type="iconType" :size="iconSize"></Icon>
                </Row>
                <Row type="flex" align="middle" justify="center" >
                    <p class="subtitle-text">{{ subTitle }}</p>
                </Row>
                <Row type="flex" align="middle" justify="center" >
                    <p class="title-text" :style="{fontSize: countSize, fontWeight: countWeight}">{{ title }}</p>
                </Row>
            </Col>
        </div>
    </Card>
</template>

<script>
export default {
  name: 'infoPanel',
  props: {
    idName: String,
    decimals: {
      type: Number,
      default: 2
    },
    unit: String,
    color: String,
    iconType: String,
    subTitle: {
      type: String,
      default: '副标题'
    },
    title: {
      type: String,
      default: '标题'
    },
    countSize: {
      type: String,
      default: '18px'
    },
    countWeight: {
      type: Number,
      default: 400
    },
    iconSize: {
      type: Number,
      default: 40
    },
    panelWidth: {
      type: String,
      default: '120px'
    }

  }
}
</script>

<style scoped>

</style>
