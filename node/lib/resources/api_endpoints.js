var _endpoints = {
  "subscription": [
    [
      "create",
      "POST",
      "/subscriptions",
      null,
      false
    ],
    [
      "create_for_customer",
      "POST",
      "/customers",
      "/subscriptions",
      true
    ],
    [
      "list",
      "GET",
      "/subscriptions",
      null,
      false
    ],
    [
      "subscriptions_for_customer",
      "GET",
      "/customers",
      "/subscriptions",
      true
    ],
    [
      "retrieve",
      "GET",
      "/subscriptions",
      null,
      true
    ],
    [
      "retrieve_with_scheduled_changes",
      "GET",
      "/subscriptions",
      "/retrieve_with_scheduled_changes",
      true
    ],
    [
      "remove_scheduled_changes",
      "POST",
      "/subscriptions",
      "/remove_scheduled_changes",
      true
    ],
    [
      "remove_scheduled_cancellation",
      "POST",
      "/subscriptions",
      "/remove_scheduled_cancellation",
      true
    ],
    [
      "update",
      "POST",
      "/subscriptions",
      null,
      true
    ],
    [
      "change_term_end",
      "POST",
      "/subscriptions",
      "/change_term_end",
      true
    ],
    [
      "cancel",
      "POST",
      "/subscriptions",
      "/cancel",
      true
    ],
    [
      "reactivate",
      "POST",
      "/subscriptions",
      "/reactivate",
      true
    ],
    [
      "add_charge_at_term_end",
      "POST",
      "/subscriptions",
      "/add_charge_at_term_end",
      true
    ],
    [
      "charge_addon_at_term_end",
      "POST",
      "/subscriptions",
      "/charge_addon_at_term_end",
      true
    ],
    [
      "delete",
      "POST",
      "/subscriptions",
      "/delete",
      true
    ]
  ],
  "customer": [
    [
      "create",
      "POST",
      "/customers",
      null,
      false
    ],
    [
      "list",
      "GET",
      "/customers",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/customers",
      null,
      true
    ],
    [
      "update",
      "POST",
      "/customers",
      null,
      true
    ],
    [
      "update_payment_method",
      "POST",
      "/customers",
      "/update_payment_method",
      true
    ],
    [
      "update_billing_info",
      "POST",
      "/customers",
      "/update_billing_info",
      true
    ],
    [
      "add_contact",
      "POST",
      "/customers",
      "/add_contact",
      true
    ],
    [
      "update_contact",
      "POST",
      "/customers",
      "/update_contact",
      true
    ],
    [
      "delete_contact",
      "POST",
      "/customers",
      "/delete_contact",
      true
    ],
    [
      "add_account_credits",
      "POST",
      "/customers",
      "/add_account_credits",
      true
    ],
    [
      "deduct_account_credits",
      "POST",
      "/customers",
      "/deduct_account_credits",
      true
    ],
    [
      "set_account_credits",
      "POST",
      "/customers",
      "/set_account_credits",
      true
    ],
    [
      "delete",
      "POST",
      "/customers",
      "/delete",
      true
    ]
  ],
  "card": [
    [
      "retrieve",
      "GET",
      "/cards",
      null,
      true
    ],
    [
      "update_card_for_customer",
      "POST",
      "/customers",
      "/credit_card",
      true
    ],
    [
      "switch_gateway",
      "POST",
      "/customers",
      "/switch_gateway",
      true
    ],
    [
      "delete_card_for_customer",
      "POST",
      "/customers",
      "/delete_card",
      true
    ]
  ],
  "invoice": [
    [
      "create",
      "POST",
      "/invoices",
      null,
      false
    ],
    [
      "charge",
      "POST",
      "/invoices",
      "/charge",
      false
    ],
    [
      "charge_addon",
      "POST",
      "/invoices",
      "/charge_addon",
      false
    ],
    [
      "stop_dunning",
      "POST",
      "/invoices",
      "/stop_dunning",
      true
    ],
    [
      "list",
      "GET",
      "/invoices",
      null,
      false
    ],
    [
      "invoices_for_customer",
      "GET",
      "/customers",
      "/invoices",
      true
    ],
    [
      "invoices_for_subscription",
      "GET",
      "/subscriptions",
      "/invoices",
      true
    ],
    [
      "retrieve",
      "GET",
      "/invoices",
      null,
      true
    ],
    [
      "pdf",
      "POST",
      "/invoices",
      "/pdf",
      true
    ],
    [
      "add_charge",
      "POST",
      "/invoices",
      "/add_charge",
      true
    ],
    [
      "add_addon_charge",
      "POST",
      "/invoices",
      "/add_addon_charge",
      true
    ],
    [
      "collect",
      "POST",
      "/invoices",
      "/collect",
      true
    ],
    [
      "collect_payment",
      "POST",
      "/invoices",
      "/collect_payment",
      true
    ],
    [
      "refund",
      "POST",
      "/invoices",
      "/refund",
      true
    ],
    [
      "record_refund",
      "POST",
      "/invoices",
      "/record_refund",
      true
    ],
    [
      "void_invoice",
      "POST",
      "/invoices",
      "/void",
      true
    ],
    [
      "delete",
      "POST",
      "/invoices",
      "/delete",
      true
    ]
  ],
  "order": [
    [
      "create",
      "POST",
      "/orders",
      null,
      false
    ],
    [
      "update",
      "POST",
      "/orders",
      null,
      true
    ],
    [
      "retrieve",
      "GET",
      "/orders",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/orders",
      null,
      false
    ],
    [
      "orders_for_invoice",
      "GET",
      "/invoices",
      "/orders",
      true
    ]
  ],
  "transaction": [
    [
      "list",
      "GET",
      "/transactions",
      null,
      false
    ],
    [
      "transactions_for_customer",
      "GET",
      "/customers",
      "/transactions",
      true
    ],
    [
      "transactions_for_subscription",
      "GET",
      "/subscriptions",
      "/transactions",
      true
    ],
    [
      "transactions_for_invoice",
      "GET",
      "/invoices",
      "/transactions",
      true
    ],
    [
      "retrieve",
      "GET",
      "/transactions",
      null,
      true
    ],
    [
      "record_payment",
      "POST",
      "/invoices",
      "/record_payment",
      true
    ]
  ],
  "hosted_page": [
    [
      "checkout_new",
      "POST",
      "/hosted_pages",
      "/checkout_new",
      false
    ],
    [
      "checkout_existing",
      "POST",
      "/hosted_pages",
      "/checkout_existing",
      false
    ],
    [
      "update_card",
      "POST",
      "/hosted_pages",
      "/update_card",
      false
    ],
    [
      "update_payment_method",
      "POST",
      "/hosted_pages",
      "/update_payment_method",
      false
    ],
    [
      "checkout_onetime_charge",
      "POST",
      "/hosted_pages",
      "/checkout_onetime_charge",
      false
    ],
    [
      "checkout_onetime_addons",
      "POST",
      "/hosted_pages",
      "/checkout_onetime_addons",
      false
    ],
    [
      "retrieve",
      "GET",
      "/hosted_pages",
      null,
      true
    ]
  ],
  "estimate": [
    [
      "create_subscription",
      "POST",
      "/estimates",
      "/create_subscription",
      false
    ],
    [
      "update_subscription",
      "POST",
      "/estimates",
      "/update_subscription",
      false
    ],
    [
      "renewal_estimate",
      "GET",
      "/subscriptions",
      "/renewal_estimate",
      true
    ]
  ],
  "plan": [
    [
      "create",
      "POST",
      "/plans",
      null,
      false
    ],
    [
      "update",
      "POST",
      "/plans",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/plans",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/plans",
      null,
      true
    ],
    [
      "delete",
      "POST",
      "/plans",
      "/delete",
      true
    ]
  ],
  "addon": [
    [
      "create",
      "POST",
      "/addons",
      null,
      false
    ],
    [
      "update",
      "POST",
      "/addons",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/addons",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/addons",
      null,
      true
    ],
    [
      "delete",
      "POST",
      "/addons",
      "/delete",
      true
    ]
  ],
  "coupon": [
    [
      "create",
      "POST",
      "/coupons",
      null,
      false
    ],
    [
      "list",
      "GET",
      "/coupons",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/coupons",
      null,
      true
    ]
  ],
  "coupon_code": [
    [
      "create",
      "POST",
      "/coupon_codes",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/coupon_codes",
      null,
      true
    ]
  ],
  "address": [
    [
      "retrieve",
      "GET",
      "/addresses",
      null,
      false
    ],
    [
      "update",
      "POST",
      "/addresses",
      null,
      false
    ]
  ],
  "event": [
    [
      "list",
      "GET",
      "/events",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/events",
      null,
      true
    ]
  ],
  "comment": [
    [
      "create",
      "POST",
      "/comments",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/comments",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/comments",
      null,
      false
    ],
    [
      "delete",
      "POST",
      "/comments",
      "/delete",
      true
    ]
  ],
  "download": [],
  "portal_session": [
    [
      "create",
      "POST",
      "/portal_sessions",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/portal_sessions",
      null,
      true
    ],
    [
      "logout",
      "POST",
      "/portal_sessions",
      "/logout",
      true
    ],
    [
      "activate",
      "POST",
      "/portal_sessions",
      "/activate",
      true
    ]
  ]
};
module.exports = _endpoints;