<template>
    <header class="header">
        <img class="header__logo" src="/logo.svg" alt="logo">
        <nav>
            <ul class="header__nav">                
                <li class="header__nav-item"><router-link to="/">Форма</router-link></li>
                <li class="header__nav-item"><router-link to="/preview">Превью</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>


<style lang="scss" scoped>

.header {
    width: 100%;
    height: 76px;
    padding: 0 20px;
    background-color: #ffffff;
    border-bottom: 1px solid #1111111A;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 576px) {
        justify-content: flex-end;    
    }

    &__logo {
        position: absolute;
        top: 22px;
        left: 51px;

        @media (max-width: 576px) {
            left: -30px;
        }
    }

    &__nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
    }

    &__nav-item {
        opacity: 0.48;
    }

    &__nav-item:hover {
    color: #6B6B6B;
    opacity: 1;
    }

    &__nav-item:active {
        color: #111111;
    }
}
</style>