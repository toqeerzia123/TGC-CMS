using TGC.CMS.Debugging;

namespace TGC.CMS
{
    public class CMSConsts
    {
        public const string LocalizationSourceName = "CMS";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "a380e3627dec422b9e4300d1c70dd145";
    }
}
