<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const sitePv = ref("--"); // 总访问量
const siteUv = ref("--"); // 总访客数

let observer: MutationObserver | null = null;

onMounted(() => {
  const pvElement = document.getElementById("busuanzi_value_site_pv");
  const uvElement = document.getElementById("busuanzi_value_site_uv");

  if (pvElement && uvElement) {
    // 初始化 MutationObserver
    observer = new MutationObserver(() => {
      sitePv.value = pvElement.textContent || "--";
      siteUv.value = uvElement.textContent || "--";
    });

    // 观察文本内容的变化
    observer.observe(pvElement, { childList: true });
    observer.observe(uvElement, { childList: true });

    // 初始化时手动获取一次值
    sitePv.value = pvElement.textContent || "--";
    siteUv.value = uvElement.textContent || "--";
  }
});

onBeforeUnmount(() => {
  // 停止观察以避免内存泄漏
  observer?.disconnect();
});
</script>

<template>
    <div class="panel">
        <div class="container">
            <section class="grid">
                <!-- 隐藏的 span 元素 -->
                <span id="busuanzi_value_site_pv" class="font-bold" style="display: none">--</span>
                <span id="busuanzi_value_site_uv" class="font-bold" style="display: none">--</span>

                <!-- 动态显示的内容 -->
                <img :src="`https://badgen.net/badge/Baris 本站总访问量/${sitePv}/green?icon=github`">
                <div style="display: flex; align-items: center;">
                    <img src="https://doc.baris.top/logo.png" alt="heart" width="50" height="50" />
                    <span style="margin-left: 10px;">Baris</span>
                </div>

                <img :src="`https://badgen.net/badge/Baris 本站访客数/${siteUv}/green?icon=github`">
            </section>
        </div>
    </div>
</template>

<style scoped>
.panel {
  margin-top: 12px;
  margin-bottom: 8px;
}

.container {
  background-color: #f3fafc;
  border-radius: 8px;
  width: 100%;
  min-height: 32px;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
}

.grid {
  font-weight: 500;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
}

.text {
  font-size: .875rem;
  line-height: 1.25rem;
}
</style>
