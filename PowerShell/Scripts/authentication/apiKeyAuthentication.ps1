# APIKey authentication example
# ---------------------------- #
$headers = [System.Collections.Generic.Dictionary[[String], [String]]]::new()
$headers.Add("Authorization", "Bearer $($actionContext.Configuration.APIKey)")
# ---------------------------- #