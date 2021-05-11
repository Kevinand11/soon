<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
body {
    background: #17224d;
}
#app {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url('./assets/background.png');
    padding: 1rem;
    text-align: center;
}
h2 {
    color: white;
    margin: 1rem 0;
    font-weight: 600;
}
p {
    color: white;
}
</style>
