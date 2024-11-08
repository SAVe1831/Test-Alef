<template>
    <div>
        <PersonalData @update:personalData="updatePersonalData" :parentName="personalData.parentName" :parentAge="personalData.parentAge" />
        <ChildrenData @update:childrenData="updateChildrenData" :childrenData="childrenData" />
        <div class="button-container">
            <ButtonSave @click="saveChanges" />
        </div>
    </div>
</template>

<script setup>
import PersonalData from '../components/PersonalData.vue';
import ChildrenData from '../components/ChildrenData.vue';
import ButtonSave from '../components/ButtonSave.vue';
import { useStore } from "vuex";
import { onMounted, ref } from 'vue';

const store = useStore();

const personalData = ref({
    parentName: '',
    parentAge: null
})

const childrenData = ref([]);

const updatePersonalData = (data) => {
    personalData.value.parentName = data.parentName;
    personalData.value.parentAge = data.parentAge;
    savePersonalToLocalStorage(personalData.value);}

const updateChildrenData = (data) => {
    childrenData.value = data;
    saveChildrenToLocalStorage(data);
}

const saveChanges = () => {
    store.commit('setPersonalData', personalData.value);
    store.commit('setChildrenData', childrenData.value);
}

const savePersonalToLocalStorage = (data) => {
    localStorage.setItem('personalData', JSON.stringify(data));
};

const saveChildrenToLocalStorage = (data) => {
    localStorage.setItem('childrenData', JSON.stringify(data));
};

const loadFromLocalStorage = () => {
    const personalDataFromStorage = localStorage.getItem('personalData');
    if (personalDataFromStorage) {
        personalData.value = JSON.parse(personalDataFromStorage);
    }

    const childrenDataFromStorage = localStorage.getItem('childrenData');
    if (childrenDataFromStorage) {
        childrenData.value = JSON.parse(childrenDataFromStorage);
    }
};

onMounted(() => {
    loadFromLocalStorage();
})
</script>

<style lang="scss">

.button-container {
    max-width: 616px;
    margin: 30px auto 0 auto;
    display: flex;
    justify-content: flex-start;
}

</style>