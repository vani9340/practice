<script>
export let data;
const {posts} = data;

</script>
<div class='p-8'>
<h2>Blog Posts </h2>
<ul>
    {#each posts as post} 
    <li>
        <a href='/blog/{post.id}'>{post.title}</a>
    </li>
    {/each}
</ul>

</div>