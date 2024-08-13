<template>
    <div class="container">
        <div class="row">
        <div class="col-md-6 mx-auto" style="margin-bottom: 20%;">
            <div class="mt-5 text-center">
                <!-- Content -->
                <h1>404 - Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>

            <img :src="require('@/assets/eram-animation.gif')" style="width: 30%;"></img>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'NotFound'
};

</script>