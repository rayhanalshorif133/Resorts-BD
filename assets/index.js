$(()=>{
    handleClickSearchDestination();
    handleClickSelectDateRange();
});

const handleClickSelectDateRange = () => {
    $(".checkDateRangeInput").click(function(e) {
        // $(".search_destination_main").addClass('hidden');
        // $(".select_date_form").removeClass('hidden');
    });
};

const handleClickSearchDestination = () => {
    $(".search_destination").click(function () {
        $(".search_destination_main").addClass('hidden');
        $(".search_destination_form").removeClass('hidden');
        $(".search_destination").focus();
    });

    $(".search_destination").keyup(function () {
        const value = $(this).val().toLowerCase();
        $(".destination_option").each(function () {
            const text = $(this).text().toLowerCase();
            if (text.search(value) > -1) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    });

    $(".return_main_destination_form").click(function () {
        $(".search_destination_form").addClass('hidden');
        $(".select_date_form").addClass('hidden');
        $(".search_destination_main").removeClass('hidden');
    });

    $(".destination_option").click(function () {
        $(".search_destination_form").addClass('hidden');
        $(".search_destination_main").removeClass('hidden');
        const value = $(this).find('option').val();
        $(".search_destination").val(value).addClass('text-xl font-semibold');
    });
};