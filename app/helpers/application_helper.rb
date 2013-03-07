module ApplicationHelper

  def auto_complete_search(name, val, options = {})
    path = eval("#{controller_name}_path")
    options.merge!(:class => "autocomplete-input", :'data-url' => "#{path}/auto_complete_#{name}" )
    text_field_tag(name, val, options)
  end

  def icon_text(i, text="", opts = {})
    (content_tag(:i,"", :class=>"icon-#{i} #{opts[:class]}") + " " + text).html_safe
  end

end
