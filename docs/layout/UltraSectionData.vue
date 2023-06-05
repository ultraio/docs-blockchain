<template>
    <div class="section-group">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <hr />
        <div class="section-links">
            <slot name="links"></slot>
        </div>
    </div>
</template>

<style>
.section-group {
    display: block;
}

.link-wrap {
    text-decoration: none !important;
    color: white;
    font-family: Inter;
    width: 100%;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-decoration: none;
    opacity: 0.5;
}

.header:hover {
    opacity: 1;
}

.header a {
    color: white;
    text-decoration: none;
}

.section-group hr {
    border: 0px;
    min-height: 2px;
    max-height: 2px;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
}

.section-links {
    display: flex;
    flex-direction: column;
}

.section-links a {
    color: white;
    text-decoration: none;
    margin-top: 12px !important;
    opacity: 0.5;
}

.section-links a:hover {
    opacity: 1;
}
</style>
