jQuery(function () {
    if (document.cookie.indexOf('iconSize') !== -1) {
        return;
    }

    window.location.href = window.location.href + 'iconSize?24x24';
});
