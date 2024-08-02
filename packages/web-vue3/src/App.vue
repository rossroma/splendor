<template>
  <div class="container mx-auto max-w-5xl">
    <header>
      <img src="https://via.placeholder.com/50" alt="Logo" class="h-12 w-12">
    </header>
    <section class="mt-20 mx-auto">
      <h1 class="text-5xl font-bold">璀璨宝石</h1>
      <p class="py-6">
        在《璀璨宝石》中，你将扮演一位文艺复兴时期的富商，运用资源收购矿山、建设交通、雇佣艺术家，将原石冶炼成美丽的珠宝。点击下方按钮开始游戏吧...
      </p>

      <button class="btn btn-outline btn-accent mr-5">立即开始</button>
      <button class="btn btn-outline btn-primary">创建房间</button>
    </section>

    <section class="mt-20 mx-auto">
      <h1 class="text-5xl font-bold mb-4">游戏玩法</h1>
      <h3 class="text-3xl font-bold mb-5">游戏设置</h3>
      <p class="py-1">
        将发展卡牌按等级洗成三堆牌库，然后排成一列，将其扣置放在游戏区域中间。每个等级翻开4张卡牌，放置于相应的牌堆右侧。抽出数目为玩家人数+1的贵族板块（例如,4人游戏时翻开5个板块），将剩余的贵族板块移出游戏。将宝石代币根据颜色分成6堆,并放在所有玩家方便拿取的位置。
      </p>

      <h3 class="text-3xl font-bold mb-5">胜利方法</h3>
      <p class="py-1">当有玩家获得了15点威望点数时，完成当前一轮，让每位玩家都进行了相同数量的回合，此时</p>
      <p class="py-1">1. 胜利点数最多的玩家获胜；</p>
      <p class="py-1">2. 如果平局，则购买发展卡牌最少的人获胜；</p>
      <p class="py-1">3. 如果依然平局，那么这些玩家共享胜利；</p>

      <h3 class="text-3xl font-bold mb-5">卡牌与标记</h3>
      <p class="py-1">游戏配件中有40个宝石标记、90张发展卡牌与</p>
      <p class="py-1">宝石分为7个翡翠标记、7个蓝宝石标记、7个红宝石标记、7个钻石标记、7个缟玛瑙标记与5个黄金标记</p>
      <p class="py-1">发展卡牌有三种种类，提供0到5不等的声望点数，与要用宝石或积累发展卡牌进行购买，发展卡牌会为你提供一个所指示宝石的永久拥有权</p>
      <!-- <p class="py-1">贵族板块会受他们开出的发展卡牌的要求进行拜访，满足条件的玩家可以拿取对应的板块,每个贵族提供三点声望点数</p> -->

      <h3 class="text-3xl font-bold mb-5">行动轮</h3>
      <p class="py-1">玩家在自己的回合内，必须执行四个行动之一</p>
      <p class="py-1">选择宝石：拿3个不同颜色的宝石标记或拿取2个相同颜色的宝石标记</p>
      <p class="py-1">只有当要拿取的宝石至少有四个时，才能执行这个行动</p>
      <p class="py-1">保留卡牌：保留一张发展卡牌并拿取一张黄金</p>
      <p class="py-1">购买一张发展卡牌：从游戏区域中间或先前保留的发展卡牌中，正面朝上购买一张</p>

      <h3 class="text-3xl font-bold mb-5">选择宝石</h3>
      <p class="py-1">如果已没有3个不同颜色的宝石,你可以只拿取2个(基至1个)玩家在一轮结束时黄金和宝石总计不能超过10个。如果超过10个,必须将多余的宝石放回,玩家可以放回全部或部分刚刚拿取的宝石或黄金。玩家拥有的宝石或黄金数目总是对其他玩家可见，如果某种颜色的宝石数目少于4个,则玩家不能拿取2个同色的该种宝石</p>

      <h3 class="text-3xl font-bold mb-5">保留一张发展卡牌</h3>
      <p class="py-1">要保留发展卡牌,玩家可以从游戏区域中间正面朝上的卡牌中拿取一张;也可以从场上某个牌库顶上抽取,抽取的卡牌对其他玩保密</p>
      <p>保留的卡牌留在手中,不能被弃掉,玩家在手中最多只能保留3张而唯一失去手牌的方式就是将其购买(见下),保留卡牌是唯一能获取黄金的方式如果已没有黄金,玩家依然可以保留卡牌,只是不会获得黄</p>

      <h3 class="text-3xl font-bold mb-5">购买一张发展卡牌</h3>
      <p class="py-1">要购买发展卡牌,玩家必须花费卡牌上所示数目的宝石.黄金标记可以代替任意颜色的宝石,花费的宝石(包括黄金)放回到游
戏区域中间</p>
<p>玩家可以从游戏区域中间正面朝上的卡牌中购买一张,也可以购买自己手中之前保留的卡牌玩家购买的卡牌按颜色分列放置,使其奖励和声望点数始终可见</p>
    </section>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">

</style>
