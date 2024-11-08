<template>
    <div class="wrapper">
        <div class="preview">
            <div class="preview__personal-data">
                <p class="preview__personal-data-title">Персональные данные</p>
                <p v-if="store.getters.getPersonalData.parentName" class="preview__personal-data-value">{{ store.getters.getPersonalData.parentName.trim() }}, {{ store.getters.getPersonalData.parentAge }} {{ getAgeSuffix(store.getters.getPersonalData.parentAge) }}</p>
            </div>
            <div class="preview__children-data">
                <p class="preview__children-data-title">Дети</p>
                <div v-if="store.getters.getChildrenData.length" v-for="child in store.getters.getChildrenData" :key="child.id" class="preview__children-data-value">{{ child.name.trim() }}, {{ child.age }} {{ getAgeSuffix(child.age) }}</div>              
            </div>
        </div>
    </div>    
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const getAgeSuffix = (age) => {
    if (age % 10 === 1 && age % 100 !== 11) {
        return 'год';
    } else if ((age % 10 >= 2 && age % 10 <= 4) && (age % 100 < 10 || age % 100 >= 20)) {
        return 'года';
    } else {
        return 'лет';
    }
};

onMounted(() => {
    store.getters.getPersonalData;
    store.getters.getChildrenData;
})
</script>

<style lang="scss" scoped>

.wrapper {    
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
}
.preview {
    width: 616px;
    display: flex;
    flex-direction: column;
    gap: 60px;

    &__personal-data, &__children-data {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__personal-data-title, &__children-data-title {    
        font-size: 16px;
        font-weight: 500;
    }

    &__personal-data-value {
        font-size: 16px;
        font-weight: 700;
    }

    &__children-data-value {
        max-width: 280px;
        width: fit-content;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        font-weight: 700;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: #F1F1F1;
    }
}
</style>