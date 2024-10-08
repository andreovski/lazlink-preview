import * as Yup from "yup";

export const validateSchemaBasicForm = Yup.object({
  name: Yup.string().min(2, "Nome muito curto"),
  useEnterpriseName: Yup.boolean(),
  enterpriseName: Yup.string().when(
    "useEnterpriseName",
    ([useEnterpriseName], schema) => {
      return useEnterpriseName
        ? schema.required("O nome da empresa deve ser informado")
        : schema;
    },
  ),
});

export const validateSchemaUrlForm = Yup.object({
  url: Yup.string().matches(
    /^[a-zA-Z0-9_]+$/,
    "A URL deve conter apenas letras, números e underline.",
  ),
});
