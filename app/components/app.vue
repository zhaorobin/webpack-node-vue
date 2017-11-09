<template>
    <div id="app">
        <p>
            <router-link to="/index">index</router-link>
            <router-link :to="{ name: 'about', params: { id: 'foo' }}">about</router-link>
            <router-link to="/about/foo/test">info</router-link>
        </p>
        <router-view></router-view>
    </div>

</template>
