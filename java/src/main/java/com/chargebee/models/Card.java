package com.chargebee.models;

import com.chargebee.*;
import com.chargebee.internal.*;
import com.chargebee.internal.HttpUtil.Method;
import com.chargebee.models.enums.*;
import org.json.*;
import java.io.*;
import java.sql.Timestamp;
import java.util.*;

public class Card extends Resource<Card> {

    public enum Status {
        VALID,
        EXPIRING,
        EXPIRED,
        _UNKNOWN; /*Indicates unexpected value for this enum. You can get this when there is a
        java-client version incompatibility. We suggest you to upgrade to the latest version */
    }

    public enum CardType {
        VISA,
        MASTERCARD,
        AMERICAN_EXPRESS,
        DISCOVER,
        JCB,
        DINERS_CLUB,
        OTHER,
        NOT_APPLICABLE,
        _UNKNOWN; /*Indicates unexpected value for this enum. You can get this when there is a
        java-client version incompatibility. We suggest you to upgrade to the latest version */
    }

    //Constructors
    //============

    public Card(String jsonStr) {
        super(jsonStr);
    }

    public Card(JSONObject jsonObj) {
        super(jsonObj);
    }

    // Fields
    //=======

    public String customerId() {
        return reqString("customer_id");
    }

    public Status status() {
        return reqEnum("status", Status.class);
    }

    public Gateway gateway() {
        return reqEnum("gateway", Gateway.class);
    }

    public String firstName() {
        return optString("first_name");
    }

    public String lastName() {
        return optString("last_name");
    }

    public String iin() {
        return reqString("iin");
    }

    public String last4() {
        return reqString("last4");
    }

    public CardType cardType() {
        return optEnum("card_type", CardType.class);
    }

    public Integer expiryMonth() {
        return reqInteger("expiry_month");
    }

    public Integer expiryYear() {
        return reqInteger("expiry_year");
    }

    public String billingAddr1() {
        return optString("billing_addr1");
    }

    public String billingAddr2() {
        return optString("billing_addr2");
    }

    public String billingCity() {
        return optString("billing_city");
    }

    public String billingState() {
        return optString("billing_state");
    }

    public String billingCountry() {
        return optString("billing_country");
    }

    public String billingZip() {
        return optString("billing_zip");
    }

    public String maskedNumber() {
        return optString("masked_number");
    }

    // Operations
    //===========

    public static Request retrieve(String id) throws IOException {
        String uri = uri("cards", nullCheck(id));
        return new Request(Method.GET, uri);
    }

    public static UpdateCardForCustomerRequest updateCardForCustomer(String id) throws IOException {
        String uri = uri("customers", nullCheck(id), "credit_card");
        return new UpdateCardForCustomerRequest(Method.POST, uri);
    }

    public static Request deleteCardForCustomer(String id) throws IOException {
        String uri = uri("customers", nullCheck(id), "delete_card");
        return new Request(Method.POST, uri);
    }


    // Operation Request Classes
    //==========================

    public static class UpdateCardForCustomerRequest extends Request<UpdateCardForCustomerRequest> {

        private UpdateCardForCustomerRequest(Method httpMeth, String uri) {
            super(httpMeth, uri);
        }
    
        public UpdateCardForCustomerRequest gateway(Gateway gateway) {
            params.addOpt("gateway", gateway);
            return this;
        }


        public UpdateCardForCustomerRequest tmpToken(String tmpToken) {
            params.addOpt("tmp_token", tmpToken);
            return this;
        }


        public UpdateCardForCustomerRequest firstName(String firstName) {
            params.addOpt("first_name", firstName);
            return this;
        }


        public UpdateCardForCustomerRequest lastName(String lastName) {
            params.addOpt("last_name", lastName);
            return this;
        }


        public UpdateCardForCustomerRequest number(String number) {
            params.add("number", number);
            return this;
        }


        public UpdateCardForCustomerRequest expiryMonth(Integer expiryMonth) {
            params.add("expiry_month", expiryMonth);
            return this;
        }


        public UpdateCardForCustomerRequest expiryYear(Integer expiryYear) {
            params.add("expiry_year", expiryYear);
            return this;
        }


        public UpdateCardForCustomerRequest cvv(String cvv) {
            params.addOpt("cvv", cvv);
            return this;
        }


        public UpdateCardForCustomerRequest billingAddr1(String billingAddr1) {
            params.addOpt("billing_addr1", billingAddr1);
            return this;
        }


        public UpdateCardForCustomerRequest billingAddr2(String billingAddr2) {
            params.addOpt("billing_addr2", billingAddr2);
            return this;
        }


        public UpdateCardForCustomerRequest billingCity(String billingCity) {
            params.addOpt("billing_city", billingCity);
            return this;
        }


        public UpdateCardForCustomerRequest billingState(String billingState) {
            params.addOpt("billing_state", billingState);
            return this;
        }


        public UpdateCardForCustomerRequest billingZip(String billingZip) {
            params.addOpt("billing_zip", billingZip);
            return this;
        }


        public UpdateCardForCustomerRequest billingCountry(String billingCountry) {
            params.addOpt("billing_country", billingCountry);
            return this;
        }


        public UpdateCardForCustomerRequest customerVatNumber(String customerVatNumber) {
            params.addOpt("customer[vat_number]", customerVatNumber);
            return this;
        }

        @Override
        public Params params() {
            return params;
        }
    }

}
