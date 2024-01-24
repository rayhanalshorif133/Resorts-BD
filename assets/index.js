$(()=>{
    handleClickSearchDestination();
});

const handleClickSearchDestination = () => {
    $(".search_destination").click(function () {
        $(".search_destination_main").addClass('hidden');
        $(".search_destination_form").removeClass('hidden');
    });

    $(".return_main_destination_form").click(function () {
        $(".search_destination_form").addClass('hidden');
        $(".search_destination_main").removeClass('hidden');
    });

    $(".destination_option").click(function () {
        $(".search_destination_form").addClass('hidden');
        $(".search_destination_main").removeClass('hidden');
        const value = $(this).find('option').val();
        $(".search_destination").val(value).addClass('text-lg font-semibold');
    });
};