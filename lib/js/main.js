$(document).ready(function() {

    jQuery.validator.addMethod("fullname", function(value, element) {
        if (/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(value)) {
            return true;
        } else {
            return false;
        };
    });

    jQuery.validator.addMethod("telefone", function(value, element) {
        if (/(\([0-9]{2}\)\s[0-9]{5}\-[0-9]{4})/.test(value)) {
            return true;
        } else {
            return false;
        };
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(11) 98765-4321'
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true,
                fullname: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
                telefone: true,
            },
            mensagem: {
                required: true,
            },
        },
        messages: {
            email: {
                required: 'Esse campo é obrigatório.',
            },
            mensagem: {
                required: 'Esse campo é obrigatório.',
            },
            nome: {
                required: 'Esse campo é obrigatório.',
                fullname: 'Por favor, insira seu nome e sobrenome.',
            },
            telefone: {
                required: 'Esse campo é obrigatório.',
                telefone: 'Por favor, insira sum número de telefone válido.',
            },
        }
    })
})