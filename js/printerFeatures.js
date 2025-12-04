const classContainerPrint = document.querySelector(".container-print")
const classPrinter = document.querySelectorAll(".printer")

classPrinter.forEach(printer => {
    printer.addEventListener("click", function () {
        window.location.href = 'printerFeatures.html'
    });
})