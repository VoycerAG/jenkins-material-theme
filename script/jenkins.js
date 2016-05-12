jQuery(function () {
    if (document.cookie.indexOf('iconSize') !== -1) {
        return;
    }

    if (jQuery('a[href="/iconSize?24x24"]').length) {
        window.location.href = '/iconSize?24x24';
    }
});
