"use client";

// RHF
import { useFieldArray, useFormContext } from "react-hook-form";

// Components
import {
    BaseButton,
    FormCustomInput,
    FormInput,
    Subheading,
} from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { Plus } from "lucide-react";

const BillToSection = () => {
    const { control } = useFormContext();

    const { _t } = useTranslationContext();

    const CUSTOM_INPUT_NAME = "receiver.customInputs";

    const { fields, append, remove } = useFieldArray({
        control: control,
        name: CUSTOM_INPUT_NAME,
    });

    const addNewCustomInput = () => {
        append({
            key: "",
            value: "",
        });
    };

    const removeCustomInput = (index: number) => {
        remove(index);
    };

    return (
      <section className="flex flex-col gap-3">
        <Subheading>{_t("form.steps.fromAndTo.billTo")}:</Subheading>

        <FormInput
          name="receiver.name"
          label={_t("form.steps.fromAndTo.name")}
          placeholder="Client name"
        />
        <FormInput
          name="receiver.address"
          label={_t("form.steps.fromAndTo.address")}
          placeholder="Client address"
        />
        <FormInput
          name="receiver.zipCode"
          label={_t("form.steps.fromAndTo.zipCode")}
          placeholder="Client zip code"
        />
        <FormInput
          name="receiver.city"
          label={_t("form.steps.fromAndTo.city")}
          placeholder="Client city"
        />
        {/* <FormInput
                name="receiver.country"
                label={_t("form.steps.fromAndTo.country")}
                placeholder="Receiver country"
            /> */}
        <FormInput
          name="receiver.email"
          label={_t("form.steps.fromAndTo.email")}
          placeholder="Client email"
        />
        <FormInput
          name="receiver.phone"
          label={_t("form.steps.fromAndTo.phone")}
          placeholder="Client phone number"
          type="text"
          inputMode="tel"
          pattern="[0-9+\-\(\)\s]*"
          aria-describedby="phone-format"
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = target.value.replace(/[^\d\+\-\(\)\s]/g, "");
          }}
        />

        {/* //? key = field.id fixes a bug where wrong field gets deleted  */}
        {fields?.map((field, index) => (
          <FormCustomInput
            key={field.id}
            index={index}
            location={CUSTOM_INPUT_NAME}
            removeField={removeCustomInput}
          />
        ))}

        <BaseButton
          tooltipLabel="Add custom input to receiver"
          size="sm"
          variant="link"
          className="w-fit"
          onClick={addNewCustomInput}
        >
          <Plus />
          {_t("form.steps.fromAndTo.addCustomInput")}
        </BaseButton>
      </section>
    );
};

export default BillToSection;
