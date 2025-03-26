import React from "react";

// Components
import { InvoiceLayout } from "@/app/components";

// Helpers
import { formatNumberWithCommas, isDataUrl } from "@/lib/helpers";

// Variables
import { DATE_OPTIONS } from "@/lib/variables";

// Types
import { InvoiceType } from "@/types";

//header image

import headerImage from "@/public/assets/img/header.png";
const InvoiceTemplate = (data: InvoiceType) => {
  const { sender, receiver, details } = data;

  return (
    <InvoiceLayout data={data}>
      <h1 className="text-[34px] font-bold text-center">Quotation</h1>
      <img src={headerImage.src} alt="" width={1400} height={1000} />

      <div className="flex justify-between">
        <div>
          {/* {details.invoiceLogo && (
              <img
                src={details.invoiceLogo}
                width={140}
                height={100}
                alt={`Logo of ${sender.name}`}
              />
            )} */}
        </div>
        {/* <div className="text-right">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Quotation
          </h2>
          <span className="mt-1 block text-gray-500">
            {details.invoiceNumber}
          </span>
          <address className="mt-4 not-italic text-gray-800">
            {sender.address}
            <br />
            {sender.zipCode}, {sender.city}
            <br />
            {sender.country}
            <br />
          </address>
        </div> */}
      </div>
      {/* <h1 className="mt-2 text-lg md:text-xl font-semibold text-orange-600">
        {sender.name} 
      </h1> */}
      <div className="text-left">
        <h1 className="mt-2 text-lg md:text-xl font-semibold text-orange-600">
          {sender.name}
        </h1>
        <span className="mt-1 block text-gray-500">
          {details.invoiceNumber}
        </span>
        <div>
          <p className="block text-sm font-medium text-gray-800">
            {sender.email}
          </p>
          <p className="block text-sm font-medium text-gray-800">
            {sender.phone}
          </p>
        </div>
        <address className="mt-4 not-italic text-gray-800">
          {sender.address}
          <br />
          {sender.zipCode}, {sender.city}
          <br />
          {sender.country}
          <br />
        </address>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Bill to:</h3>
          <h3 className="text-lg font-semibold text-gray-800">
            {receiver.name}
          </h3>
          <address className="mt-2 not-italic text-gray-500">
            {receiver.address}, {receiver.zipCode}
            <br />
            {receiver.city}, {receiver.country}
            <br />
          </address>
        </div>
        <div className="sm:text-right space-y-2">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Invoice date:
              </dt>
              <dd className="col-span-3 text-gray-500">
                {new Date(details.invoiceDate).toLocaleDateString(
                  "en-US",
                  DATE_OPTIONS
                )}
              </dd>
            </dl>
            <dl className="grid sm:grid-cols-6 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Due date:
              </dt>
              <dd className="col-span-3 text-gray-500">
                {new Date(details.dueDate).toLocaleDateString(
                  "en-US",
                  DATE_OPTIONS
                )}
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="border border-gray-200 p-1 rounded-lg space-y-1">
          <div className="hidden sm:grid sm:grid-cols-5">
            <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
              Item
            </div>
            <div className="text-left text-xs font-medium text-gray-500 uppercase">
              Qty
            </div>
            <div className="text-left text-xs font-medium text-gray-500 uppercase">
              Rate
            </div>
            <div className="text-right text-xs font-medium text-gray-500 uppercase">
              Amount
            </div>
          </div>
          <div className="hidden sm:block border-b border-gray-200"></div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-1">
            {details.items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="col-span-full sm:col-span-2 border-b border-gray-300">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-600 whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
                <div className="border-b border-gray-300">
                  <p className="text-gray-800">{item.quantity}</p>
                </div>
                <div className="border-b border-gray-300">
                  <p className="text-gray-800">{item.unitPrice} ₹</p>
                </div>
                <div className="border-b border-gray-300">
                  <p className="sm:text-right text-gray-800">{item.total} ₹</p>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="sm:hidden border-b border-gray-200"></div>
        </div>
      </div>

      <div className="mt-2 flex sm:justify-end">
        <div className="sm:text-right space-y-2">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
            <dl className="grid sm:grid-cols-5 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">
                Subtotal:
              </dt>
              <dd className="col-span-2 text-gray-500">
                {formatNumberWithCommas(Number(details.subTotal))} ₹
              </dd>
            </dl>
            {details.discountDetails?.amount != undefined &&
              details.discountDetails?.amount > 0 && (
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Discount:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    {details.discountDetails.amountType === "amount"
                      ? `- ${details.discountDetails.amount} ₹`
                      : `- ${details.discountDetails.amount}%`}
                  </dd>
                </dl>
              )}
            {details.taxDetails?.amount != undefined &&
              details.taxDetails?.amount > 0 && (
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Tax:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    {details.taxDetails.amountType === "amount"
                      ? `+ ${details.taxDetails.amount} ₹`
                      : `+ ${details.taxDetails.amount}%`}
                  </dd>
                </dl>
              )}
            {details.shippingDetails?.cost != undefined &&
              details.shippingDetails?.cost > 0 && (
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Shipping:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    {details.shippingDetails.costType === "amount"
                      ? `+ ${details.shippingDetails.cost} ₹`
                      : `+ ${details.shippingDetails.cost}%`}
                  </dd>
                </dl>
              )}
            <dl className="grid sm:grid-cols-5 gap-x-3">
              <dt className="col-span-3 font-semibold text-gray-800">Total:</dt>
              <dd className="col-span-2 text-gray-500">
                {formatNumberWithCommas(Number(details.totalAmount))} ₹
              </dd>
            </dl>
            {details.totalAmountInWords && (
              <dl className="grid sm:grid-cols-5 gap-x-3">
                <dt className="col-span-3 font-semibold text-gray-800">
                  Total in words:
                </dt>
                <dd className="col-span-2 text-gray-500">
                  <em>{details.totalAmountInWords} ₹</em>
                </dd>
              </dl>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="my-4">
          <div className="my-2">
            <p className="font-semibold text-blue-600">Additional notes:</p>
            <p className="font-regular text-gray-800">
              {details.additionalNotes}
            </p>
          </div>
          {/* <div className="my-2">
              <p className="font-semibold text-blue-600">Payment terms:</p>
              <p className="font-regular text-gray-800">
                {details.paymentTerms}
              </p>
            </div> */}
          {/* <div className="my-2">
              <span className="font-semibold text-md text-gray-800">
                Please send the payment to this address
                <p className="text-sm">
                  Bank: {details.paymentInformation?.bankName}
                </p>
                <p className="text-sm">
                  Account name: {details.paymentInformation?.accountName}
                </p>
                <p className="text-sm">
                  Account no: {details.paymentInformation?.accountNumber}
                </p>
              </span>
                    </div> */}
        </div>
        <p className="text-gray-500 text-sm">
          If you have any questions concerning this invoice, use the following
          contact information:
        </p>
        <div className=" ">
          <h1 className="text-3xl   my-4">Elgis Fitness</h1>

          <div className="address mb-8">
            <p className="font-bold text-lg text-gray-700">Address:</p>
            <p className="text-gray-600"># 44 CMR Road</p>
            <p className="text-gray-600">
              Near Axis Bank H R B R 2nd Block, Kalyannagar Bangalore 560043.
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> 8970070089 / 9590789333
            </p>
            <p className="text-gray-600">
              <strong>GSTIN/UIN:</strong> 29AJOPN1843M1ZJ
            </p>
            <p className="text-gray-600">
              <strong>PAN:</strong> AJOPN1843M
            </p>
          </div>

          <div className="payment-info mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Payment Information
            </h3>
            <p className="text-gray-600">
              <strong>
                Please send a crossed cheque/demand draft/pay order in favor of
                Elgis Fitness
              </strong>
            </p>
            <p className="text-gray-600">
              Will be delivered at your premises in 45 days on receipt of
              Purchase Order and the advance of min 80%
            </p>
            <p className="text-gray-600">
              The above-mentioned products will be delivered as per the stock
              availability.
            </p>
          </div>

          <div className="transportation mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Transportation
            </h3>
            <p className="text-gray-600">
              Transportation charges are free within the city limit. Unloading
              at actuals.
            </p>
          </div>

          <div className="payment-balance mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Payment
            </h3>
            <p className="text-gray-600">
              Balance on delivery and installation.
            </p>
          </div>

          <div className="warranty mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Warranty
            </h3>
            <p className="text-gray-600">
              We assure that our equipment will be trouble-free for longer years
              and we assure our sincere support and service to maintain the
              reputation of your good office in the industry.
            </p>
            <p className="text-gray-600">
              Looking forward to building a long-term relationship with your
              good office, which will be mutually beneficial. Also, we assure
              our prompt attention and services at all times.
            </p>
          </div>

          <div className="bank-details mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Bank Details
            </h3>
            <p className="text-gray-600">
              <strong>Account Name:</strong> ELGIS FITNESS
            </p>
            <p className="text-gray-600">
              <strong>Bank Name:</strong> HDFC
            </p>
            <p className="text-gray-600">
              <strong>Account Number:</strong> 03532000010202
            </p>
            <p className="text-gray-600">
              <strong>Branch:</strong> KALYAN NAGAR
            </p>
            <p className="text-gray-600">
              <strong>IFSC Code:</strong> HDFC0000353
            </p>
          </div>

          <div className="signature mb-8">
            <p className="text-gray-600">For ELGIS FITNESS</p>
            <p className="text-gray-600 font-semibold">Nagaraj A</p>
            <p className="text-gray-600">Regional Sales Manager</p>
            <p className="text-gray-600">89 700 700 89 / 9590 789 333</p>
          </div>
        </div>

        {/* <div>
          <p className="block text-sm font-medium text-gray-800">
            {sender.email}
          </p>
          <p className="block text-sm font-medium text-gray-800">
            {sender.phone}
          </p>
        </div> */}
      </div>

      {/* Signature */}
      {details?.signature?.data && isDataUrl(details?.signature?.data) ? (
        <div className="mt-6">
          <p className="font-semibold text-gray-800">Signature:</p>
          <img
            src={details.signature.data}
            width={120}
            height={60}
            alt={`Signature of ${sender.name}`}
          />
        </div>
      ) : details.signature?.data ? (
        <div className="mt-6">
          <p className="text-gray-800">Signature:</p>
          <p
            style={{
              fontSize: 30,
              fontWeight: 400,
              fontFamily: `${details.signature.fontFamily}, cursive`,
              color: "black",
            }}
          >
            {details.signature.data}
          </p>
        </div>
      ) : null}
    </InvoiceLayout>
  );
};

export default InvoiceTemplate;
