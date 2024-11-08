<template>
    <div class="children-data">
        <div class="children-data__top">
            <p class="children-data__title">Дети (макс. 5)</p>
            <button v-if="children.length < 5" class="children-data__add" @click="addChild">
                <img src="/plus.svg" alt="plus">
                <span>Добавить ребенка</span>
            </button>
        </div>
        <div class="children-data__list">
            <div  v-for="(child, index) in children" :key="index" class="children-data__list-child-item">
                <div class="children-data__name">
                    <label class="children-data__label" :for="'name-' + index">Имя</label>
                    <input class="children-data__input" type="text" :id="'name-' + index" v-model="child.name" @input="emitData" placeholder="Имя ребенка">
                </div>
                <div class="children-data__age">
                    <label class="children-data__label" :for="'age-' + index">Возраст</label>
                    <input class="children-data__input children-data__input-number" type="number" :id="'age-' + index" v-model="child.age" @input="emitData" placeholder="Возраст ребенка">
                </div>
                <span class="children-data__delete-text"  @click="removeChild(index)">Удалить</span>
                <img class="children-data__delete-icon"  @click="removeChild(index)" src="/delete.svg" alt="delete">               
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits, watch } from 'vue';

const props = defineProps({
    childrenData: Array
})

const emit = defineEmits();

const children = ref([]);

const addChild = () => {
    if (children.value.length < 5) {
        children.value.push({ name: '', age: '' });
    }
};

const removeChild = (index) => {
    children.value.splice(index, 1);
    emitData();
}

const emitData = () => {
    emit('update:childrenData', children.value);
}


watch(props, () => {
    children.value = props.childrenData;
})
</script>

<style lang="scss" scoped>
.children-data {
    max-width: 616px;
    height: auto;
    margin: 44px auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;

    &__top {
        position: relative;
    }

    &__title {
        font-size: 16px;
        font-weight: 500;
    }

    &__add {
        width: 204px;
        height: 44px;
        border: 2px solid #01A7FD;
        border-radius: 100px;
        padding: 10px 18px;
        position: absolute;
        right: 0;
        top: -11px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4px;
        cursor: pointer;
        background-color: inherit;

        @media (max-width: 380px) {
            top: 30px;
            left: 0;
        }

        &:hover {
            background-color: rgba(110, 65, 226, 0.04);
        }

        &:active {
            background-color: rgba(110, 65, 226, 0.16);
        }

        span {
            color: #01A7FD;
            display: block;
            width: 136px;
        }
    }

    &__list {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;

        @media (max-width: 380px) {
            margin-top: 40px;
        }
    }

    &__list-child-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 18px;

    }

    &__delete-text {
        color: #01A7FD;
        cursor: pointer;

        @media (max-width: 480px) {
            display: none;
        }
    }

    &__delete-icon {
        width: 32px;
        height: 32px;

        @media (min-width: 481px) {
            display: none;
        }
    }

   
    &__name, &__age {
        width: 260px;
        height: 56px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid #f1f1f1;
        border-radius: 4px;
        padding: 8px 16px;

        @media (max-width: 480px) {
            padding: 8px;
        }
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