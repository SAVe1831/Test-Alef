<template>
    <div class="personal-data">
        <p class="personal-data__title">Персональные данные</p>
        <div class="personal-data__form">
            <div class="personal-data__item">
                <label class="personal-data__label" for="name">Имя</label>
                <input class="personal-data__input" type="text" id="name" v-model="parentName" @input="emitData" placeholder="Ваше имя">
            </div>
            <div class="personal-data__item">
                <label class="personal-data__label" for="age">Возраст</label>
                <input class="personal-data__input personal-data__input-number" type="number" id="age" v-model="parentAge" @input="emitData" placeholder="Ваш возраст">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits, watch } from 'vue';

const props = defineProps({
    parentName: String,
    parentAge: Number
})

const emit = defineEmits();

const parentName = ref('');
const parentAge = ref(null);

const emitData = () => {
    emit('update:personalData', {
        parentName: parentName.value,
        parentAge: parentAge.value
    });
} 

watch(() => props.parentName, (newVal) => {
    parentName.value = newVal;
});

watch(() => props.parentAge, (newVal) => {
    parentAge.value = newVal;
});
</script>

<style lang="scss" scoped>

.personal-data {
    max-width: 616px;
    height: 166px;
    margin: 30px auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    &__title {
        font-size: 16px;
        font-weight: 500;
    }

    &__form {
        width: 100%;
        height: 122px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__item {
        width: 100%;
        height: 56px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid #f1f1f1;
        border-radius: 4px;
        padding: 8px 16px;
    }

    &__input {
        width: 100%; 
        border: none;   
        outline: none;   
        
        &-number::-webkit-outer-spin-button,
        &-number::-webkit-inner-spin-button {
        -webkit-appearance: none;
        } 
    }

    &__label {
        font-size: 13px;
        line-height: 16px;
        color: #999999;
    }
}
</style>