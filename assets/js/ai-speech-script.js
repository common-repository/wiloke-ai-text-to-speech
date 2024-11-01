(function ($) {
        if (typeof AI_SPEECH !== 'undefined') {
            $.ajax({
                type: "POST",
                url: AI_SPEECH.ajaxUrl,
                data: {
                    postId: AI_SPEECH.postId,
                    nonce: AI_SPEECH.nonce
                },
                success: function (response) {
                    alert(response.data.msg);
                }
            })
        }
    }
)(jQuery);