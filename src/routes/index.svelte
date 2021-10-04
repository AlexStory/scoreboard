<script>
    import Header from '../components/header.svelte'
    import PlayerForm from '../components/playerForm.svelte'
    import Player from '../components/player.svelte'
    import { players } from '../stores/players.js'
</script>

<Header />
<div class="container">
    <PlayerForm />

    {#if $players.length === 0}
        <span>No Players...</span>
    {:else}
        <div class="flex flex-col">
            {#each $players as player }
                <Player player={player} />
            {/each}
        </div>
    {/if}
</div>
