<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style lang="scss">
    
    h1 {
        color: orangered;
        font-size: functions.toRem(36);
        @include breakpoint.up('md') {
            color: green;
        }
        @include breakpoint.up('lg') {
            color: blue;
        }
    }
</style>
