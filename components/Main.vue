<script setup>
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})

const isDark = usePreferredDark()
const imageOverlayColor = computed(() => {
  const foo = isDark.value // make imageOverlayColor reactive to dark mode
  if (!mounted.value) {
    return ''
  }
  const style = window.getComputedStyle(document.body)
  const color = style.getPropertyValue('--color-background')
  return color
})

const showGirlVideo = ref(false)

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
</script>

<template>
  <div class="main">
    <div class="image">
      <ImageZoom src="/images/teaser.jpg" :options="{ background: imageOverlayColor }" />
      <div class="caption">Our results on images in-the-wild. Our method, ReVP, can hide an image inside another image.
        Consider various irreversible image processing operations, such as censorship and AI editing, we hide each
        original image in its processed version. The figure shows our reconstructions and the processed images.</div>
    </div>

    <div class="section-title">Demo</div>
    <iframe src="https://revp2024-revp.hf.space" frameborder="0" style="width: 100%; aspect-ratio: 16/10;"></iframe>


    <div class="section-title">Abstract</div>
    <p>
      As large pretrained models gain traction, we find that large pretrained autoencoders (AEs) are surprisingly
      suitable for image steganography. Unlike previous methods, our model performs message reconstruction in the latent
      space of an AE, enabling effortless training of a pair of steganographic encoder-decoder using a simple L2 loss.
      With a small number of additional tunable parameters (around 10% of the base AE), our method reconstructs
      intricate high-frequency details. To further examine our method in practical scenarios, we test it in two novel
      applications: reversible visual censorship and reversible AI editing. Additionally, we provide modules to enhance
      our model's robustness to cropping, quantization, and compression. Our method is straightforward and easy to
      implement. Despite its simplicity, it works effectively on both in-the-wild images and standard datasets across
      various applications, offering competitive perceptual quality compared to specialized models.
    </p>

    <div class="section-title">Architecture</div>
    <div class="image">
      <ImageZoom src="/images/system-diagram.jpg" :options="{ background: imageOverlayColor }" />
      <div class="caption">MeDM mediates independent image score estimations after every denoising step. Inspired by the
        fact that video pixels are essentially views to the underlying objects, we construct an explicit pixel
        repository
        <LatexR /> to represent the underlying world. For more details, please refer to our <a href="/medm.pdf"
          target="_blank">paper</a>.
      </div>
    </div>

    <div class="section-title">Results</div>
    <div class="image">
      <ImageZoom src="/images/full-teaser.jpg" :options="{ background: imageOverlayColor }" />
      <div class="caption">Full side-by-side comparisons</div>
    </div>
  </div>
</template>

<style scoped>
.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 0 0.5rem 0;
}

.caption {
  margin-top: .2rem;
  padding: 0 2.5rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.6;
}

.image {
  margin: 1.5rem 0 1rem 0;
  line-height: 0;
}

@media (max-width: 650px) {
  .caption {
    font-size: 1rem;
    padding: 0;
  }
}

p {
  margin: .5rem 0 1rem 0;
}
</style>
