﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;
using System.Web;

namespace ChargeBee.Api
{
    public class Params
    {
		Dictionary<string, object> m_dict = new Dictionary<string, object>();

        public void Add(string key, object value)
        {
            if (value == null || String.IsNullOrEmpty(value.ToString()))
                throw new ArgumentException(String.Format("Value for {0} can't be empty or null!", key));

            AddOpt(key, value);
        }

        public void AddOpt(string key, object value)
		{	
			m_dict.Add(key, value == null ? String.Empty : ConvertValue(value));
        }

        public string GetQuery()
        {
            return String.Join("&", GetPairs());
        }

        private string[] GetPairs()
        {
            List<string> pairs = new List<string>(m_dict.Keys.Count);

            foreach (var pair in m_dict)
            {
				if (pair.Value is IList) {
					int idx = 0;
					foreach (object item in (IList)pair.Value) {
						pairs.Add (String.Format ("{0}[{1}]={2}",
							HttpUtility.UrlEncode (pair.Key),
							idx++,
							HttpUtility.UrlEncode (item.ToString ()))
						);
					}
				} else {
					pairs.Add (String.Format ("{0}={1}", HttpUtility.UrlEncode (pair.Key), HttpUtility.UrlEncode (pair.Value.ToString ())));
				}
            }
            return pairs.ToArray();
        }

		private static object ConvertValue(object value) {
			if (value is string || value is int || value is long
			    || value is double) {
				return value.ToString ();
			} else if (value is bool) {
				return value.ToString ().ToLower ();
			} else if (value is Enum) {
				Type eType = value.GetType ();
				FieldInfo fi = eType.GetField (value.ToString ());
				DescriptionAttribute[] attrs = (DescriptionAttribute[])fi.GetCustomAttributes (
					                               typeof(DescriptionAttribute), false);
				if (attrs.Length == 0) {
					throw new ArgumentException ("Enum fields must be decorated with DescriptionAttribute!");
				}
				return attrs [0].Description;
			}else if(value is IList) {
				IList origList = (IList)value;
				List<string> l = new List<string>();
				foreach (object item in origList) {
					l.Add((string)ConvertValue(item));
				}
				return l;
			} else {
				throw new SystemException("Type [" + value.GetType().ToString() + "] not handled");
			}
    	}
	}
}